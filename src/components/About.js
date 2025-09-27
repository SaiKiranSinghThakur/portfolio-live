import React from "react";

import { motion } from "framer-motion"

function About() {

  return (
    <section className="min-h-screen bg-gradient-to-r from-amber-100 via-orange-200 to-rose-100 flex justify-center py-12 pt-[75px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-[210mm] max-w-full bg-white/30 backdrop-blur-md rounded-xl shadow-xl px-8 py-8 overflow-auto"
      >

        {/* 1. About */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl font-semibold mb-4 text-gray-900"
        >
          About Me
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mb-8 text-gray-800 text-lg space-y-2 font-sans"
        >
              <p>
                Master's in Data Analytics from St. Clair College and Bachelor's in Computer Science from Sri Indu College.
                Passionate about building and enhancing applications using Java, Spring, Hibernate, and RESTful APIs.
              </p>

        </motion.ul>

      </motion.div>
    </section>
  );
}

export default About;