"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const RIBBON_VERTEX_SHADER = `
  uniform float uTime;
  uniform float uSpeed;
  uniform float uPhase;
  uniform vec2 uPointer;
  varying vec2 vUv;
  varying float vCrest;

  void main() {
    vUv = uv;
    vec3 pos = position;

    float waveA = sin(pos.x * 0.48 + uTime * uSpeed + uPhase) * 0.42;
    float waveB = sin(pos.x * 1.12 - uTime * (uSpeed * 0.72) + uPhase * 1.4) * 0.18;
    float pointerOffset = uPointer.y * 0.24 * cos(pos.x * 0.35 + uPhase);

    pos.y += waveA + waveB + pointerOffset;
    pos.z += cos(pos.x * 0.55 + uTime * (uSpeed * 0.8) + uPhase) * 0.36 + uPointer.x * 0.28;

    vCrest = clamp((waveA + waveB) * 0.8 + 0.5, 0.0, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const RIBBON_FRAGMENT_SHADER = `
  uniform float uAlpha;
  varying vec2 vUv;
  varying float vCrest;

  void main() {
    float verticalFeather = pow(sin(vUv.y * 3.14159265), 2.1);
    float horizontalFeather = smoothstep(0.0, 0.2, vUv.x) * (1.0 - smoothstep(0.8, 1.0, vUv.x));
    float striations = 0.72 + 0.28 * sin(vUv.y * 31.4159265);

    vec3 bronze = vec3(0.68, 0.50, 0.20);
    vec3 champagne = vec3(0.92, 0.80, 0.50);
    vec3 color = mix(bronze, champagne, vCrest);

    float alpha = verticalFeather * horizontalFeather * striations * uAlpha;
    gl_FragColor = vec4(color, alpha);
  }
`;

function createGoldMoteTexture(): THREE.CanvasTexture | null {
  const sprite = document.createElement("canvas");
  sprite.width = 64;
  sprite.height = 64;
  const ctx = sprite.getContext("2d");
  if (!ctx) return null;

  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, "rgba(245, 224, 168, 1)");
  grad.addColorStop(0.35, "rgba(212, 175, 90, 0.65)");
  grad.addColorStop(1, "rgba(212, 175, 90, 0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(sprite);
  texture.needsUpdate = true;
  return texture;
}

const HeroGoldMist3D = () => {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = hostRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let frameId = 0;
    let resizeObserver: ResizeObserver | null = null;
    let moteTexture: THREE.CanvasTexture | null = null;

    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];

    try {
      const width = Math.max(container.clientWidth, 320);
      const height = Math.max(container.clientHeight, 360);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 35);
      camera.position.set(0, 0, 7.6);

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.domElement.className = "w-full h-full block pointer-events-none";
      renderer.domElement.setAttribute("aria-hidden", "true");

      container.innerHTML = "";
      container.appendChild(renderer.domElement);

      const ribbonConfigs = [
        { y: 1.8, z: -2.4, rotZ: -0.14, speed: 0.34, phase: 0.0, alpha: 0.16, scaleY: 1.15 },
        { y: 1.0, z: -1.8, rotZ: 0.09, speed: 0.28, phase: 1.1, alpha: 0.19, scaleY: 1.0 },
        { y: 0.2, z: -1.3, rotZ: -0.06, speed: 0.24, phase: 2.3, alpha: 0.21, scaleY: 1.25 },
        { y: -0.6, z: -1.6, rotZ: 0.11, speed: 0.31, phase: 3.4, alpha: 0.18, scaleY: 0.95 },
        { y: -1.35, z: -2.1, rotZ: -0.1, speed: 0.26, phase: 4.6, alpha: 0.15, scaleY: 1.1 },
        { y: -2.05, z: -2.6, rotZ: 0.07, speed: 0.22, phase: 5.5, alpha: 0.13, scaleY: 1.2 },
      ];

      const pointerTarget = new THREE.Vector2(0, 0);
      const pointerCurrent = new THREE.Vector2(0, 0);
      const ribbonUniforms: Array<{ uTime: { value: number }; uPointer: { value: THREE.Vector2 } }> = [];

      const baseGeo = new THREE.PlaneGeometry(17, 1.35, 128, 16);
      geometries.push(baseGeo);

      ribbonConfigs.forEach((cfg) => {
        const uniforms = {
          uTime: { value: 1.2 },
          uSpeed: { value: cfg.speed },
          uPhase: { value: cfg.phase },
          uPointer: { value: pointerCurrent },
          uAlpha: { value: cfg.alpha },
        };
        ribbonUniforms.push(uniforms);

        const mat = new THREE.ShaderMaterial({
          vertexShader: RIBBON_VERTEX_SHADER,
          fragmentShader: RIBBON_FRAGMENT_SHADER,
          uniforms,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          side: THREE.DoubleSide,
        });
        materials.push(mat);

        const mesh = new THREE.Mesh(baseGeo, mat);
        mesh.position.set(0, cfg.y, cfg.z);
        mesh.rotation.z = cfg.rotZ;
        mesh.scale.y = cfg.scaleY;
        scene.add(mesh);
      });

      // Soft champagne-gold dust motes floating through the silk mist layers.
      const moteCount = 90;
      const motePositions = new Float32Array(moteCount * 3);
      const moteDrifts = new Float32Array(moteCount);

      for (let i = 0; i < moteCount; i += 1) {
        motePositions[i * 3] = (Math.random() - 0.5) * 14;
        motePositions[i * 3 + 1] = (Math.random() - 0.5) * 7.2;
        motePositions[i * 3 + 2] = -2.2 + Math.random() * 3.2;
        moteDrifts[i] = 0.25 + Math.random() * 0.55;
      }

      const moteGeo = new THREE.BufferGeometry();
      moteGeo.setAttribute("position", new THREE.BufferAttribute(motePositions, 3));
      geometries.push(moteGeo);

      moteTexture = createGoldMoteTexture();
      const moteMat = new THREE.PointsMaterial({
        size: 0.14,
        map: moteTexture ?? undefined,
        color: 0xd8b45d,
        transparent: true,
        opacity: 0.45,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });
      materials.push(moteMat);

      const motes = new THREE.Points(moteGeo, moteMat);
      scene.add(motes);

      const onPointerMove = (e: PointerEvent) => {
        pointerTarget.x = (e.clientX / window.innerWidth - 0.5) * 2;
        pointerTarget.y = -(e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener("pointermove", onPointerMove, { passive: true });

      resizeObserver = new ResizeObserver((entries) => {
        if (!renderer || !entries[0]) return;
        const nextW = Math.max(entries[0].contentRect.width, 300);
        const nextH = Math.max(entries[0].contentRect.height, 320);
        camera.aspect = nextW / nextH;
        camera.updateProjectionMatrix();
        renderer.setSize(nextW, nextH);
      });
      resizeObserver.observe(container);

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const clock = new THREE.Clock();

      const animate = () => {
        if (!renderer) return;
        const elapsed = clock.getElapsedTime();

        pointerCurrent.lerp(pointerTarget, 0.04);

        for (const u of ribbonUniforms) {
          u.uTime.value = elapsed;
        }

        const posAttr = moteGeo.getAttribute("position") as THREE.BufferAttribute;
        for (let i = 0; i < moteCount; i += 1) {
          let y = posAttr.getY(i) + 0.0022 * moteDrifts[i];
          if (y > 3.6) y = -3.6;
          posAttr.setY(i, y);
        }
        posAttr.needsUpdate = true;

        renderer.render(scene, camera);
        frameId = window.requestAnimationFrame(animate);
      };

      if (reducedMotion) {
        renderer.render(scene, camera);
      } else {
        frameId = window.requestAnimationFrame(animate);
      }

      return () => {
        window.cancelAnimationFrame(frameId);
        resizeObserver?.disconnect();
        window.removeEventListener("pointermove", onPointerMove);
        geometries.forEach((g) => g.dispose());
        materials.forEach((m) => m.dispose());
        moteTexture?.dispose();
        renderer?.dispose();
      };
    } catch {
      return () => {
        window.cancelAnimationFrame(frameId);
        resizeObserver?.disconnect();
        geometries.forEach((g) => g.dispose());
        materials.forEach((m) => m.dispose());
        moteTexture?.dispose();
        renderer?.dispose();
      };
    }
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className="no-print pointer-events-none absolute inset-0 z-0 overflow-hidden"
    />
  );
};

export default HeroGoldMist3D;
