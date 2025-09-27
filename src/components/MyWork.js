import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function MyWork() {

    const experience = [
      { title: "NTT Data Canada", position: "Software Developer"},
      { title: "Synergist Pvt. Limited", position: "Associate Java Developer"},
    ];



  const externalProjects = [
    { title: "Loblaws", position: "Software Developer"},
    { title: "TCS", position: "Java Developer"},
    { title: "MindGeek", position: "SQL Developer"},
    { title: "NLP Project", position: "ML Engineer"},
    { title: "Chatbot Application", position: "Java Developer" }
  ];

  const technologies = [
    { category: "Programming Languages", Technology: "Java 8 and Later"},
    { category: "Frameworks / Libraries", Technology: "Spring Boot Security, Spring Data JPA, Hibernate / JPA, Spring WebFlux / Kafka, Spring Cloud (OpenFeign / Gateway)"},
    { category: "Databases", Technology: "SQL (Oracle/MySQL/PostgreSQL), Liquibase"},
    { category: "DevOps / Tools", Technology: "Docker, Git / GitHub / Bitbucket, Jenkins, Maven, Prometheus"},
    { category: "Mapping / Transformation", Technology: "MapStruct / ModelMapper"},
    { category: "Software Practices / Concepts", Technology: "Design patterns, Data structures, Agile / Scrum"}
  ];

  return (
    <section className="min-h-screen bg-gradient-to-r from-amber-100 via-orange-200 to-rose-100 flex justify-center py-12 pt-[75px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-[210mm] max-w-full bg-white/30 backdrop-blur-md rounded-xl shadow-xl px-8 py-8 overflow-auto"
      >

        {/* 1. Experience */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl font-semibold mb-4 text-gray-900"
        >
          Experience
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mb-8 text-gray-800 text-lg space-y-2 font-sans"
        >
         {experience.map((exp, idx) => (
            <li key={idx}>
              <span className="font-medium">{exp.title}</span>: {exp.position}
            </li>
          ))}
        </motion.ul>

        {/* 2. Projects */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="text-3xl font-semibold mb-4 text-gray-900"
        >
          External Projects
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-8 text-gray-800 text-lg space-y-2 font-sans"
        >
          {externalProjects.map((proj, idx) => (
            <li key={idx}>
              <span className="font-medium">{proj.title}</span>: {proj.position}
            </li>
          ))}
        </motion.ul>

        {/* 3. Technologies */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-3xl font-semibold mb-4 text-gray-900 text-left"
        >
          Technologies
        </motion.h2>
        <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="mb-8 text-gray-800 text-lg space-y-2 font-sans"
         >
         {technologies.map((tool, idx) => (
         <li key={idx}>
         <span className="font-medium">{tool.category}</span>: {tool.Technology}
         </li>
         ))}
         </motion.ul>
         {/* 1. Experience */}
         <motion.h2
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.5 }}
           className="text-3xl font-semibold mb-2 text-gray-900"
         >

         </motion.h2>

         {/* Hint link for more info */}
         <p className="mb-4 text-sm text-gray-600">
           Want to know more information about my experience?{" "}
           <Link to="/experience"
             className="text-blue-600 hover:underline"
           >
             Click here
           </Link>.
         </p>

      </motion.div>

    </section>
  );
}

export default MyWork;
