import React, { useState } from "react";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      company: "NTT DATA Canada",
      client: "Fidelity Investments",
      role: "Software Developer",
      location: "Halifax, NS",
      dates: "Dec 2022 - Jun 2024",
      summary:
        "Worked on a Defined Benefits application supporting participant plans, earnings, employment events, accounts, eligibility, employee service, and pension-related calculations.",
      highlights: [
        "Developed and enhanced backend features using Java 8 and Spring based on client-specific plan requirements.",
        "Analyzed business requirements and participated in technical design, development, testing, and defect resolution.",
        "Developed and optimized SQL queries for application functionality and data validation.",
        "Worked with Maven, Git, Bitbucket, GitHub, and Jenkins for builds, version control, and CI/CD.",
        "Performed peer code reviews and collaborated with QA, Business Analysts, and Solution Architects.",
        "Contributed to the migration of application components from Java 8 to Java 11.",
      ],
      technologies: [
        "Java 8",
        "Java 11",
        "Spring",
        "REST APIs",
        "Maven",
        "Jenkins",
        "Git",
        "GitHub",
        "Bitbucket",
        "JUnit",
        "Mockito",
        "MySQL",
        "Jira",
        "Confluence",
      ],
    },
    {
      company: "The Co-operators",
      role: "Software Developer",
      location: "Guelph, ON",
      dates: "Dec 2020 - Oct 2022",
      summary:
        "Worked on an Auto Insurance Claims Processing application, developing backend modules and integrations that supported claims-related business operations.",
      highlights: [
        "Developed new features and resolved application defects using Java 11.",
        "Used Spring JDBC to perform database operations and integrate application components with the database.",
        "Developed batch-processing jobs using Spring Batch.",
        "Implemented application features using exception handling and multithreading.",
        "Developed and maintained business rules using the Drools Rules Engine.",
        "Built REST APIs to process database data and integrate with external REST services.",
      ],
      technologies: [
        "Java 11",
        "Spring JDBC",
        "Spring Batch",
        "REST APIs",
        "Maven",
        "Drools",
        "JUnit",
        "Mockito",
        "MySQL",
        "Jira",
        "Confluence",
      ],
    },
    {
      company: "Atos Syntel",
      role: "Associate Java Developer",
      location: "Pune, India",
      dates: "May 2019 - Dec 2019",
      summary:
        "Worked on a healthcare application used to manage patient medication details and support integrations with dependent applications.",
      highlights: [
        "Developed backend microservices using Spring Boot.",
        "Implemented asynchronous producer-consumer communication using Apache Kafka.",
        "Used Docker to containerize and run application services.",
        "Used Swagger for API testing and Mockito for unit testing.",
        "Developed SQL queries, stored procedures, and packages for data retrieval and validation.",
        "Collaborated with Database Administrators, QA Engineers, Business Analysts, and Client Representatives.",
      ],
      technologies: [
        "Java 8",
        "Spring Boot",
        "Microservices",
        "REST APIs",
        "Apache Kafka",
        "Docker",
        "Swagger",
        "Maven",
        "MySQL",
        "SSRS",
        "IntelliJ IDEA",
        "Jira",
      ],
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((currentIndex) => (currentIndex + 1) % experiences.length);
  };

  const previous = () => {
    setIndex(
      (currentIndex) =>
        (currentIndex - 1 + experiences.length) % experiences.length
    );
  };

  const experience = experiences[index];

  return (
    <section className="min-h-screen bg-gradient-to-r from-amber-100 via-orange-200 to-rose-100 px-6 py-16 pt-[95px]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Professional Experience
          </h1>

          <p className="mt-4 text-lg text-gray-700">
            A summary of my professional software development experience.
          </p>
        </motion.div>

        <div className="flex gap-2 mb-6">
          {experiences.map((item, itemIndex) => (
            <button
              key={item.company}
              type="button"
              onClick={() => setIndex(itemIndex)}
              className={`h-2 flex-1 rounded-full transition-colors duration-300 ${
                itemIndex === index ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`View ${item.company} experience`}
            />
          ))}
        </div>

        <motion.article
          key={index}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl bg-white/75 border border-white/80 shadow-xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {experience.company}
              </h2>

              {experience.client && (
                <p className="mt-1 text-lg font-medium text-blue-700">
                  Client: {experience.client}
                </p>
              )}

              <p className="mt-2 text-xl font-semibold text-gray-800">
                {experience.role}
              </p>

              <p className="mt-1 text-gray-600">{experience.location}</p>
            </div>

            <p className="font-semibold text-gray-700">{experience.dates}</p>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            {experience.summary}
          </p>

          <div className="mt-7">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Key Contributions
            </h3>

            <ul className="space-y-3 text-gray-700">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1.5 text-sm font-medium text-blue-800"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={previous}
              className="px-5 py-2.5 rounded-lg border border-blue-600 text-blue-700 font-medium hover:bg-blue-50 transition"
            >
              ← Previous
            </button>

            <button
              type="button"
              onClick={next}
              className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              Next →
            </button>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default Experience;