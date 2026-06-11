import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[var(--background)] flex items-center overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-24">

        {/* HEADER */}
        <div className="mb-12">
          
          <h2 className="text-[var(--secondary)] uppercase tracking-[0.3em] text-sm font-medium">
            About Me
          </h2>

          <div className="relative inline-block mt-4">
            
            {/* Glow */}
            <div className="absolute w-[60%] h-[120%] -left-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-40 blur-2xl rounded-full"></div>

            <h1 className="relative text-5xl md:text-6xl font-black leading-tight">
              Building modern digital experiences.
            </h1>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-4xl">

          <p>
            Hi, I&apos;m <span className="text-white font-semibold">Muhammad Hanif Ibrahim</span>,
            a passionate Web Developer focused on building responsive,
            interactive, and scalable web applications using modern
            technologies such as Next.js, React, Tailwind CSS, Firebase,
            and Flutter.
          </p>

          <p>
            Beyond development, I also enjoy working as a Web Designer.
            I love transforming ideas into visually appealing interfaces,
            creating clean layouts, thoughtful user flows, and intuitive
            experiences that help users interact comfortably with digital
            products.
          </p>

          <p>
            My goal is to bridge functionality and aesthetics — developing
            products that not only work efficiently but also deliver a
            memorable user experience through modern design and smooth
            interactions.
          </p>
        </div>

        {/* SKILLS */}
        <div className="mt-12 flex flex-wrap gap-4">

          {[
            "Next.js",
            "React",
            "Tailwind CSS",
            "Firebase",
            "Flutter",
            "Figma",
            "UI Design",
            "UX Design",
          ].map((skill) => (
            <span
              key={skill}
              className="
                px-5 py-2
                rounded-full
                border
                border-[var(--secondary)]
                bg-white/5
                backdrop-blur-sm
                transition-all
                duration-300
                hover:bg-[var(--primary)]
                hover:border-[var(--primary)]
                hover:shadow-[0_0_20px_rgba(124,58,237,0.35)]
              "
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;