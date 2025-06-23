"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            À propos de <span className="text-purple-600 dark:text-purple-400">moi</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg transform rotate-6"></div>
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Portrait"
                  className="relative z-10 rounded-lg shadow-xl w-full"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Passionné par le développement web et l’analyse de données, j’ai acquis des compétences solides en création de sites avec WordPress, développement en PHP/MySQL, et gestion de données avec Python.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Formé à Sonatel Académie, j’ai travaillé sur des projets intégrant machine learning, visualisation de données et gestion de cas pratiques avec Excel.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Mon parcours en mathématiques et informatique me permet d’allier rigueur et créativité pour concevoir des solutions numériques efficaces et évolutives.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-600 dark:text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Projets</h3>
                    <p className="text-gray-600 dark:text-gray-400">+5 Réalisés</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-600 dark:text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Expérience</h3>
                    <p className="text-gray-600 dark:text-gray-400">1 ans</p>
                  </div>
                </div>

                <div className="flex items-center">
                  
                  
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
