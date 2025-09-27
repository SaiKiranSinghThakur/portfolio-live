import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-amber-100 via-orange-200 to-rose-100 flex justify-center py-12 pt-[75px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-[210mm] max-w-full bg-white/30 backdrop-blur-md rounded-xl shadow-xl px-8 py-8 overflow-auto"
      >
        {/* Contact */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl font-semibold mb-4 text-gray-900 text-center"
        >
          Contact
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mb-8 text-gray-800 text-lg space-y-4 font-sans flex flex-col items-center"
        >
          <li className="flex items-center gap-3">
            <FaGithub className="text-gray-700" />
            <a
              href="https://github.com/SaiKiranSinghThakur"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/SaiKiranSinghThakur
            </a>
          </li>

          <li className="flex items-center gap-3">
            <FaEnvelope className="text-red-600" />
            <a
              href="mailto:saikiran7505@gmail.com"
              className="text-blue-500 hover:underline"
            >
              saikiran7505@gmail.com
            </a>
          </li>

          <li className="flex items-center gap-3">
            <FaLinkedin className="text-blue-700" />
            <a
              href="https://www.linkedin.com/in/sai-kiran-thakur"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/sai-kiran-thakur
            </a>
          </li>

          <li className="flex items-center gap-3">
            <FaPhone className="text-green-600" />
            <span>+1 647 675 0523</span>
          </li>
        </motion.ul>
      </motion.div>
    </section>
  );
}

export default Contact;
