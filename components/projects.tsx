"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const projects = [
  {
    id: 1,
    title: "Gestion des Stoks",
    description: "Un système de gestion de stock intelligent conçu avec Excel, permettant de suivre précisément les entrées, sorties et niveaux d’inventaire, avec tableaux de bord dynamiques et indicateurs clés.",
    image: "projet_excel.mp4",
    category: "Data",
    technologies: ["Excel"],
    details:
      "Ce projet, entièrement développé sur Excel, offre une solution complète pour gérer efficacement les stocks d’une entreprise...",
  },
  {
    id: 2,
    title: "Gestion d'une Bibliothèque en Ligne",
    description: "Site web interactif pour gérer une bibliothèque : recherche, prêt, gestion des livres et des lecteurs.",
    image: "projet_php.mp4",
    category: "Web",
    technologies: ["PHP", "JavaScript", "HTML/CSS", "MySQL"],
    githubUrl: "https://github.com/Lans190/projet_final_php",
    details:
      "Projet individuel réalisé en PHP avec MySQL, HTML, CSS et JavaScript...",
  },
  {
    id: 3,
    title: "Tableau de Bord RH sur Excel",
    description: "Dashboard RH complet pour suivre les effectifs, salaires, âges et répartitions par département.",
    image: "gestion_RH.mp4",
    category: "Data",
    technologies: ["Excel"],
    details:
      "Ce tableau de bord RH sous Excel permet de suivre efficacement la masse salariale...",
  },
  {
    id: 4,
    title: "Jeu du Morpion",
    description: "Jeu interactif développé en JavaScript pour jouer au morpion (tic-tac-toe) contre une intelligence artificielle.",
    image: "jeu_portion.mp4",
    category: "Web",
    technologies: ["HTML/CSS", "JavaScript"],
    githubUrl: "https://github.com/Lans190/jeu_portion",
    details:
      "Ce projet est un jeu de morpion (tic-tac-toe) conçu en HTML, CSS, et JavaScript...",
  },
  {
    id: 5,
    title: "Gestion des Livres — Application CRUD avec Django, React & API",
    description: "Application web complète permettant de gérer une bibliothèque de livres avec Django REST API et React.",
    image: "djiango_react.mp4",
    category: "Web",
    technologies: ["React", "Djiango", "Api"],
    githubUrl: "https://github.com/Lans190/projet_django_react",
    details:
      "Application CRUD de gestion de livres développée avec React en frontend et Django REST Framework en backend...",
  },
  {
    id: 6,
    title: "Simulation de Crédit — Application Flask avec Modèle de Machine Learning",
    description: "Application Flask + ML pour prédire l’acceptation d’un crédit avec modèle entraîné.",
    image: "ml.mp4",
    category: "Data",
    technologies: ["Flask", "Pandas", "NumPy", "Sklearn", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/Lans190/ml",
    details:
      "Ce projet est une application web utilisant Flask pour prédire l'acceptation d'une demande de crédit...",
  },
]

const certifications = [
  {
    title: "Certification en Développement Web– D-CLIC",
    url: "https://dclic.francophonie.org/mod/customcert/view.php?id=2715&downloadown=1",
  },
  {
    title: "Certification en Traitement de données – Force-N ",
    url: "https://formation.force-n.sn/mod/customcert/view.php?id=15413&downloadown=1",
  },
   {
    title: "Python for Data Science, AI & Development -Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/JUJ80DWCTMQQ",
  },
  {
    title: "Machine Learning with Python -Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/58UBN5433YQA",
  },
  {
    title: "Google Data Analytics Capstone: Complete a Case Study -Coursera ",
    url: "https://www.coursera.org/account/accomplishments/verify/1VQ9P0NWQH0J",
  },
  {
    title: "Créer des chatbots basés sur l'IA sans programmation – Coursera ",
    url: "https://www.coursera.org/account/accomplishments/verify/6SHB3KD3M6YH",
  },
  {
    title: "IA pour tous – Coursera ",
    url: "https://www.coursera.org/account/accomplishments/verify/8EAPSGWDWYU2",
  },
  
   
]





export default function Projects() {
  const [filter, setFilter] = useState("all")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <>
      {/* Section Mes Projets */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Mes <span className="text-purple-600 dark:text-purple-400">projets</span>
          </h2>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md">
              {["all", "Data", "Web"].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    filter === category
                      ? "bg-purple-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {category === "all" ? "Tous" : category}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={projectVariants}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="relative overflow-hidden group">
                    {project.image?.match(/\.(mp4|webm|ogg)$/i) ? (
                      <video src={project.image} controls className="w-full h-auto rounded-lg" />
                    ) : (
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-auto rounded-lg"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex justify-between items-center">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="icon"
                                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                              >
                                <Maximize className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                              <DialogHeader>
                                <DialogTitle>{project.title}</DialogTitle>
                                <DialogDescription>{project.technologies.join(" • ")}</DialogDescription>
                              </DialogHeader>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {project.image?.match(/\.(mp4|webm|ogg)$/i) ? (
                                  <video src={project.image} controls className="w-full h-auto rounded-lg" />
                                ) : (
                                  <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-auto rounded-lg"
                                  />
                                )}
                                <div>
                                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.details}</p>
                                  <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, index) => (
                                      <span
                                        key={index}
                                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-xs font-medium"
                                      >
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                  {project.githubUrl && (
                                    <Button variant="outline" asChild>
                                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Github className="h-4 w-4 mr-2" />
                                        Code source
                                      </a>
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <div className="text-white font-semibold">{project.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Section Mes Certifications */}
      <section id="certifications" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Mes <span className="text-purple-600 dark:text-purple-400">certifications</span>
          </h2>

          <div className="max-w-2xl mx-auto space-y-4">
            {certifications.map((certif, index) => (
              <a
                key={index}
                href={certif.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
              >
                <span className="text-gray-800 dark:text-white font-medium">{certif.title}</span>
                <ExternalLink className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
