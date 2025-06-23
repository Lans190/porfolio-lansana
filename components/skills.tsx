"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skills = [
  { name: "PYTHON", level: 80, color: "#61DAFB" },
  { name: "Flask", level: 70, color: "#3178C6" },
  { name: "Django", level: 70, color: "#339933" },
  { name: "HTML/CSS", level: 80, color: "#E34F26" },
  { name: "JavaScript", level: 60, color: "#F7DF1E" },
  { name: "WordPress", level: 70, color: "#06B6D4" },
  { name: "PHP", level: 50, color: "#000000" },
  { name: "MySQL", level: 80, color: "#F29111" },
  { name: "Pandas", level: 85, color: "#150458" },
  { name: "NumPy", level: 80, color: "#013243" },
  { name: "Machine Learning", level: 60, color: "#FF6F00" }
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          Mes <span className="text-purple-600 dark:text-purple-400">compétences</span>
        </h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={skillVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="h-2.5 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  animate={{ width: inView ? `${skill.level}%` : 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Autres technologies et outils</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Github", "MongoDB", "Cassandra", "Talend", "MysQl", "PostgreSQL", "Excel","Power BI", "Power Automate", "Trello", "Postman"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
