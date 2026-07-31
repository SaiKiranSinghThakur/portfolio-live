import React from "react";
import { motion } from "framer-motion";
import profilePic from "./profile.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-amber-100 via-orange-200 to-rose-100 flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 p-8">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <img
            src={profilePic}
            alt="Sai Kiran Singh Thakur"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full shadow-2xl ring-4 ring-white/70 shadow-amber-200 mx-auto md:mx-0 hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900"
          >
            Welcome to My Portfolio
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800"
          >
            Sai Kiran Singh Thakur
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-xl font-medium text-blue-700 mb-5"
          >
            Software Developer | Java Backend Developer
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-lg md:text-xl text-gray-600 max-w-xl"
          >
            Building reliable and scalable backend applications using Java,
            Spring Boot, REST APIs, Microservices, SQL, and modern cloud
            technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
          >
            {/* Resume */}
            <a
              href={`${process.env.PUBLIC_URL}/Sai_Kiran_Singh_Thakur_Resume.pdf`}
              download
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Download Resume
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/SaiKiranSinghThakur"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
            >
              GitHub
            </a>

            {/* Experience */}
            <Link
              to="/Experience"
              className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
            >
              My Experience
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;