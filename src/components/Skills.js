import React from "react";
import { motion } from "framer-motion"

function Skills() {

  const technologies = [
    { category: "Programming Languages", Technology: "Java 8 and Later"},
    { category: "Frameworks / Libraries", Technology: "Spring Boot Security, Spring Data JPA, Hibernate / JPA, Spring WebFlux / Kafka, Spring Cloud (OpenFeign / Gateway)"},
    { category: "Databases", Technology: "SQL (Oracle/MySQL/PostgreSQL), Liquibase"},
    { category: "DevOps / Tools", Technology: "Docker, Git / GitHub / Bitbucket, Jenkins, Maven, Prometheus"},
    { category: "Mapping / Transformation", Technology: "MapStruct / ModelMapper"},
    { category: "Software Practices / Concepts", Technology: "Design patterns, Data structures, Agile / Scrum"}
  ];


  return(

      <section className="min-h-screen bg-gradient-to-r from-amber-100 via-orange-200 to-rose-100 flex justify-center py-12 pt-[75px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-[210mm] max-w-full bg-white/30 backdrop-blur-md rounded-xl shadow-xl px-8 py-8 overflow-auto"
        >

        {/* 3. Skills */}
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
      </motion.div>
    </section>
  );
}

export default Skills;