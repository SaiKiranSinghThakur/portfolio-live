import React, { useState } from "react";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    { company: "NTT DATA", details: "Worked on Defined Benefits application with Java 8/11, Spring, Hibernate..." },
    { company: "Synergist Private Ltd.", details: "Developed internal HR/payroll applications using Spring Boot..." },
    { company: "TATA Consultancy Services", details: "Built enterprise Java apps using Spring Boot, Hibernate..." },
    { company: "Loblaws", details: "Supported e-commerce backend with REST APIs, Spring Cloud, Kafka..." }
  ];

  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % experiences.length);
  const back = () => setIndex((i) => (i - 1 + experiences.length) % experiences.length);

  return (
    <section className="min-h-screen bg-gradient-to-r from-amber-100 via-orange-200 to-rose-100 flex justify-center py-12 pt-[75px]">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-[210mm] max-w-full bg-white/30 backdrop-blur-md rounded-xl shadow-xl px-8 py-8 overflow-auto"
      >
        {/* 🔵 Full-width Progress Bar */}
        <div className="flex mb-6 w-full">
          {experiences.map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 mx-1 rounded-full transition-colors duration-300 ${
                i <= index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Header & Navigation */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold text-gray-900">Experience</h2>
          <div className="flex space-x-2">
            <button
              onClick={back}
              className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-md"
              title="Previous"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-md"
              title="Next"
            >
              ➜
            </button>
          </div>
        </div>

        {/* Experience Content */}
        <h3 className="text-2xl font-medium text-gray-800 mb-4">
          {experiences[index].company}
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          {experiences[index].details}
        </p>
      </motion.div>
    </section>
  );
}

export default Experience;
