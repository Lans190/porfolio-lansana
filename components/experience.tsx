"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const experiences = [
  {
    id: 1,
    role: "Certification en Developpement WEB",
    company: "D-CLIC",
    period: "Mai 2025 -Juin 2025",
    description:
      "Réalisation de projets pratiques dont la création d’un site vitrine avec WordPress et d’un site de bibliothèque en ligne. Approfondissement des compétences en HTML/CSS, JavaScript, PHP et MySQL, avec application des méthodes agiles tout au long de la formation.",
    technologies: ["WordPess", "HTML/CSS", "JavaScrit", "PHP", "MySQL"],
  },
  {
    id: 2,
    role: "Développeur DATA",
    company: "Ecole du code Sonatel Académy",
    period: "Fév 2024 - Nov 2024",
    description:
  "Formation intensive axée sur le développement d'applications orientées données. Réalisation de projets pratiques incluant la création d’APIs avec Flask/Django, l’analyse de données avec Python (Pandas, Numpy, scikit-learn), la visualisation avec Matplotlib/Seaborn, et l’exploitation de bases de données relationnelles et NoSQL. Utilisation d’outils comme Talend pour l’intégration de données et Power BI pour la création de rapports interactifs. Réalisation de cas pratiques en gestion de stock et gestion RH avec Excel, avec modélisation de tableaux de bord dynamiques et automatisation de calculs analytiques.",

    technologies: ["Python", "Flask", "Djiango", "NumPy", "Pandas", "JavaScript","HTML/CSS","MySQL", "PostgreSQL","MongoDB", "Cassandra", "Docker", "Matplotlib", "Seaborn","Talend","Power BI", "Excel"],
  },
  {
    id: 3,
    role: "Licence2 en Mathématique Physique et Informatique",
    company: "Université Alioune Diop de Bambey",
    period: "2021-2023",
    description:
  "Formation théorique axée sur les fondamentaux des mathématiques, de la physique et de l’informatique. Étude approfondie de l’analyse, de l’algèbre, de la mécanique, ainsi que des bases de la programmation (C, Python) et des algorithmes.",
   technologies: [],
  },
  {
    id: 4,
    role: "Baccalauréat scientifique  ",
    company: "Lycée peyrissac",
    period: "2019 -2020",
    description:
  "Obtention du baccalauréat scientifique avec des enseignements renforcés en mathématiques, physique-chimie et sciences de la vie. Développement de rigueur scientifique et d’un esprit d’analyse à travers les travaux pratiques et les cours théoriques.",
    technologies: [],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          Mon <span className="text-purple-600 dark:text-purple-400">parcours</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-purple-200 dark:bg-purple-900/30"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} mb-12`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-purple-600 border-4 border-white dark:border-gray-950 z-10"></div>

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-xs font-medium mb-3">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{exp.role}</h3>
                    <h4 className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-3">{exp.company}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-md text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
