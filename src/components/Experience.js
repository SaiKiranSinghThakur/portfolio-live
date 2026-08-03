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
        "Performed peer code reviews and contributed to the migration of application components from Java 8 to Java 11.",
      ],

      teamCollaboration: [
        "Collaborated with Business Analysts, Solution Architects, QA Engineers, and distributed development teams across Canada, the United States, and India to deliver client-specific business requirements.",
        "Worked closely with offshore QA teams to investigate defects, validate fixes, and support monthly production releases.",
        "Participated in Agile Scrum ceremonies including sprint planning, daily stand-ups, sprint reviews, and retrospectives.",
        "Performed peer code reviews, shared technical knowledge with new team members, and collaborated on solution discussions during Scrum meetings.",
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
        "Worked on the Guidewire ClaimCenter application, contributing to the Claims Calculation Module responsible for processing vehicle damage claims based on policy coverage, customer information, vehicle details, and insurer-defined business rules.",

      highlights: [
        "Developed and enhanced backend features using Java 11 and the Spring Framework by implementing new business requirements and supporting insurance plan and policy changes.",
        "Participated in requirement analysis, technical design, development, testing, defect resolution, production support, and application maintenance.",
        "Developed REST APIs using the Spring MVC framework to integrate the Claims Calculation Module with external services.",
        "Performed database operations using Spring JDBC, implemented batch processing with Spring Batch, and maintained business rules using the Drools Rules Engine.",
        "Used Guidewire ClaimCenter to validate policy and claim information, verified application behavior after implementing backend code changes, ran the application locally for testing and debugging, and used Postman to validate REST API request and response payloads.",
        "Deployed and tested the application on Apache Tomcat to verify functionality and ensure successful application deployment.",
        "Managed application builds using Maven and maintained source code using Git while tracking user stories, defects, and development tasks in Jira.",
      ],

      teamCollaboration: [
        "Collaborated with offshore QA Engineers and Business Analysts to analyze business requirements, validate fixes, and deliver application enhancements.",
        "Worked in an Agile Scrum environment, participating in sprint planning, daily stand-ups, sprint reviews, and retrospectives.",
        "Worked closely with dedicated Claims teams while coordinating with separate Home Insurance and Investment teams for cross-functional business requirements when needed.",
        "Provided production support, investigated reported issues, and collaborated with QA during regression testing before production releases.",
      ],

      technologies: [
        "Java 11",
        "Spring Framework",
        "Spring MVC",
        "Spring JDBC",
        "Spring Batch",
        "Guidewire ClaimCenter",
        "Drools Rules Engine",
        "REST APIs",
        "Postman",
        "Apache Tomcat",
        "Maven",
        "Git",
        "Jira",
        "Confluence",
        "MySQL",
      ],
    },

    {
      company: "Atos Syntel",
      role: "Associate Software Developer",
      location: "Pune, India",
      dates: "May 2019 - Dec 2019",

      summary:
        "Worked on a Healthcare Prescription Management application that supported patient prescription processing, medication management, insurance coverage validation, prescription claims, and payment processing based on healthcare and business requirements.",

      highlights: [
        "Developed and enhanced backend microservices using Java 8 and Spring Boot.",
        "Participated in requirement analysis, development, testing, defect resolution, production support, and application maintenance.",
        "Implemented new business requirements by enhancing prescription processing workflows, insurance plans, claims processing, and payment validation logic.",
        "Resolved defects related to patient prescriptions, insurance coverage, claim processing, payment calculations, and business rules.",
        "Developed REST APIs using Spring Boot to integrate application components with dependent healthcare services.",
        "Implemented asynchronous messaging using Apache Kafka for reliable producer-consumer communication between application components.",
        "Containerized and ran application services using Docker for development and deployment.",
        "Developed SQL queries, stored procedures, and database packages for data retrieval, insertion, validation, and troubleshooting.",
        "Developed and maintained SSRS reports to monitor daily processing volumes, application performance, and operational data.",
        "Used Swagger to validate REST API functionality and Mockito for unit testing.",
        "Managed dependencies and application builds using Maven and tracked user stories, development tasks, and defects using Jira.",
      ],

      teamCollaboration: [
        "Collaborated with Database Administrators, QA Engineers, Business Analysts, and client representatives to analyze requirements and deliver application enhancements.",
        "Worked closely with QA and database teams to investigate production issues, validate application data, and resolve prescription and payment-processing defects.",
        "Participated in technical discussions, defect reviews, application testing, and knowledge-sharing activities throughout the software development lifecycle.",
        "Coordinated with dependent application teams to monitor REST API integrations and ensure reliable healthcare data exchange.",
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
        "Mockito",
        "SQL",
        "MySQL",
        "Stored Procedures",
        "Database Packages",
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

          {experience.teamCollaboration?.length > 0 && (
            <div className="mt-7">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Team Collaboration
              </h3>

              <ul className="space-y-3 text-gray-700">
                {experience.teamCollaboration.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

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

          <div className="mt-8 flex justify-between gap-4">
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