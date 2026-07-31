import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const skillGroups = [
    {
      category: "Backend Development",
      skills: [
        "Java 8",
        "Java 11",
        "Spring",
        "Spring Boot",
        "Spring MVC",
        "Hibernate",
        "JDBC",
        "RESTful APIs",
        "Microservices",
        "Apache Kafka",
      ],
    },
    {
      category: "Databases",
      skills: ["Oracle", "MySQL", "PostgreSQL", "SQL"],
    },
    {
      category: "Cloud Technologies",
      skills: [
        "Amazon Web Services (AWS)",
        "Microsoft Azure",
        "Google Cloud Platform (GCP)",
      ],
    },
    {
      category: "DevOps & Build Tools",
      skills: [
        "Docker",
        "Maven",
        "Jenkins",
        "Git",
        "GitHub",
        "GitLab",
        "Bitbucket",
      ],
    },
    {
      category: "Testing",
      skills: ["JUnit", "Mockito", "Swagger"],
    },
    {
      category: "Frontend Technologies",
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "Angular",
        "React.js",
        "Node.js",
      ],
    },
    {
      category: "Development Tools",
      skills: [
        "IntelliJ IDEA",
        "Eclipse",
        "Spring Tool Suite",
        "Jira",
        "Confluence",
      ],
    },
    {
      category: "Development Practices",
      skills: [
        "Agile",
        "Scrum",
        "Kanban",
        "Code Reviews",
        "Unit Testing",
        "CI/CD",
      ],
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
      y: 30,
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
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Technical Skills
          </h1>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Technologies and tools I use to design, develop, test, and deploy
            reliable backend applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.category}
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="rounded-2xl bg-white/70 border border-white/80 shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {group.category}
              </h2>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1.5 text-sm font-medium text-blue-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;