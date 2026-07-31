import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaFileDownload,
} from "react-icons/fa";

function Contact() {
  const contactItems = [
    {
      label: "Email",
      value: "saikiran7505@gmail.com",
      href: "mailto:saikiran7505@gmail.com",
      icon: <FaEnvelope className="text-red-600 text-2xl" />,
      external: false,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/sai-kiran-thakur",
      href: "https://www.linkedin.com/in/sai-kiran-thakur",
      icon: <FaLinkedin className="text-blue-700 text-2xl" />,
      external: true,
    },
    {
      label: "GitHub",
      value: "github.com/SaiKiranSinghThakur",
      href: "https://github.com/SaiKiranSinghThakur",
      icon: <FaGithub className="text-gray-800 text-2xl" />,
      external: true,
    },
    {
      label: "Phone",
      value: "+1 647 675 0523",
      href: "tel:+16476750523",
      icon: <FaPhone className="text-green-600 text-2xl" />,
      external: false,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-amber-100 via-orange-200 to-rose-100 px-6 py-16 pt-[95px]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact Me
          </h1>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Feel free to contact me regarding Java backend development,
            software development opportunities, or professional networking.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {contactItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="flex items-center gap-5 rounded-2xl bg-white/70 border border-white/80 shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white shadow">
                {item.icon}
              </div>

              <div className="min-w-0">
                <h2 className="text-lg font-bold text-gray-900">
                  {item.label}
                </h2>

                <p className="mt-1 text-blue-700 break-all">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;