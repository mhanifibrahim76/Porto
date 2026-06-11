"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_i80kavd",
        "template_rloksjf",
        formRef.current,
        "BIA6EAAvK8hgGStCx"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <motion.section
    id="contact"
      className="min-h-screen bg-[var(--background)] overflow-hidden"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24">
        
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* LEFT SIDE */}
          <motion.div
            className="flex-1 flex flex-col gap-10"
            variants={variants}
          >
            <motion.div variants={variants}>
              
              <h2 className="text-[var(--secondary)] uppercase tracking-[0.3em] text-sm font-medium mb-4">
                Contact
              </h2>

              <div className="relative inline-block">
                
                {/* GLOW */}
                <div className="absolute w-[70%] h-[120%] -left-6 top-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-30 blur-3xl rounded-full"></div>

                <h1 className="relative text-5xl md:text-7xl font-black leading-tight">
                  Let&apos;s Work Together
                </h1>
              </div>
            </motion.div>

            {/* ITEMS */}
            <motion.div
              className="flex flex-col gap-8"
              variants={variants}
            >
              <motion.div variants={variants}>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <span className="text-gray-400">
                  mhanifibrahim76@gmail.com
                </span>
              </motion.div>

              <motion.div variants={variants}>
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <span className="text-gray-400">
                  Bekasi, West Java
                </span>
              </motion.div>

              <motion.div variants={variants}>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <span className="text-gray-400">
                  +62 813 1710 0120
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="flex-1 relative w-full">
            
            {/* SVG BACKGROUND */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-0"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              transition={{ duration: 1, delay: 3 }}
            >
              <svg
                width="450px"
                height="450px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-[var(--primary)] opacity-40"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 3 }}
                  d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
                  strokeWidth="0.3"
                />
              </svg>
            </motion.div>

            {/* FORM */}
            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              className="relative z-10 flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-black/20 backdrop-blur-md p-8 shadow-[0_0_40px_rgba(124,58,237,0.1)]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3 }}
            >
              
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="bg-transparent border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[var(--primary)] transition-all"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-transparent border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[var(--primary)] transition-all"
              />

              <textarea
                name="message"
                rows={8}
                placeholder="Message"
                required
                className="bg-transparent border border-white/10 rounded-xl px-6 py-4 outline-none resize-none focus:border-[var(--primary)] transition-all"
              />

              <button
                type="submit"
                className="px-8 py-4 rounded-xl bg-[var(--primary)] hover:opacity-90 transition-all duration-300 font-semibold shadow-[0_0_30px_rgba(124,58,237,0.35)]"
              >
                Submit
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;