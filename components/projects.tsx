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
      "Ce projet, entièrement développé sur Excel, offre une solution complète pour gérer efficacement les stocks d’une entreprise. Il inclut : le suivi automatisé des mouvements de stock (entrées/sorties), le calcul en temps réel de la valeur totale en stock, l’analyse par catégorie et référence de produit, un tableau de bord interactif avec visualisation des données, et l’identification des Top 3 produits par mois pour aider à la prise de décision stratégique. Une démonstration concrète de la puissance d’Excel comme outil de pilotage d’activité.",
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
      "Projet individuel réalisé en PHP avec MySQL, HTML, CSS et JavaScript. L'application permet de rechercher, ajouter, modifier et supprimer des livres, ainsi que de gérer les lecteurs et leurs listes de lecture. Le backend intègre un système CRUD complet avec gestion de base de données via PHPMyAdmin. L'interface est responsive, intuitive, et respecte les bonnes pratiques d’écoconception.",
  },
  {
    id: 3,
    title: "Tableau de Bord RH sur Excel",
    description: "Dashboard RH complet pour suivre les effectifs, salaires, âges et répartitions par département.",
    image: "gestion_RH.mp4",
    category: "Data",
    technologies: ["Excel"],
    details:
      "Ce tableau de bord RH sous Excel permet de suivre efficacement la masse salariale, les effectifs, la répartition par sexe, âge et département. Il inclut des visualisations dynamiques (graphiques circulaires, barres, lignes), des top 3 des départements selon différents critères, et un suivi des départs à la retraite. Un outil puissant pour les décideurs RH souhaitant analyser en profondeur les données du personnel.",
  },
  {
    id: 4,
    title: "Jeu du Morpion",
    description: "Jeu interactif développé en JavaScript pour jouer au morpion (tic-tac-toe) contre une intelligence artificielle. Le joueur peut choisir entre plusieurs niveaux de difficulté (facile, intermédiaire, difficile) pour tester ses compétences et s’amuser. L’interface est simple, claire et responsive.",
    image: "jeu_portion.mp4",
    category: "Web",
    technologies: ["HTML/CSS", "JavaScript"],
    githubUrl: "https://github.com/Lans190/jeu_portion",
    details:
      "Ce projet est un jeu de morpion (tic-tac-toe) conçu en HTML, CSS, et JavaScript. Le joueur affronte une IA capable de jouer à différents niveaux de difficulté :Facile : l’IA joue de manière aléatoire, offrant un défi léger.Moyen : l’IA essaie de gagner ou de bloquer le joueur dans environ 50 % des cas, combinant stratégie et hasard.Difficile : l’IA utilise l’algorithme Minimax pour optimiser ses coups et proposer un véritable défi.Le jeu intègre un système d’affichage dynamique du plateau, des informations sur le joueur et le tour actuel, ainsi qu’un écran de fin indiquant le vainqueur ou le match nul. Le joueur peut redémarrer la partie ou changer le niveau de difficulté à tout moment.",
  },
  {
    id: 5,
    title: "Gestion des Livres — Application CRUD avec Django, React & API",
    description: "Application web complète permettant de gérer une bibliothèque de livres à l’aide d’un backend Django REST API et d’un frontend React moderne. Toutes les API sont testées avec Postman pour garantir leur fiabilité.",
    image: "djiango_react.mp4",
    category: "Web",
    technologies: ["React", "Djiango","Api"],
    githubUrl: "https://github.com/Lans190/projet_django_react",
    details:
      "Application CRUD de gestion de livres développée avec React en frontend et Django REST Framework en backend. Elle permet d’afficher, ajouter, modifier et supprimer des livres via une interface intuitive. Les API sont testées avec Postman pour garantir leur fiabilité. Le projet suit les bonnes pratiques d’architecture web full-stack.",
  },
  {
    id: 6,
    title: "Simulation de Crédit — Application Flask avec Modèle de Machine Learning",
    description: "Application web alimentée par un modèle de machine learning permettant d’estimer l’acceptation d’un crédit en fonction de plusieurs critères saisis par l'utilisateur. Le tout est intégré dans une interface Flask simple et intuitive.",
    image: "ml.mp4",
    category: "Data",
    technologies: ["Flask","Pandas","NumPy","Sklearn","Matplotlib","Seaborn"],
    githubUrl: "https://github.com/Lans190/ml",
    details:
      "Ce projet est une application web utilisant Flask pour prédire l'acceptation d'une demande de crédit à partir d'un modèle de machine learning entraîné avec scikit-learn. L'utilisateur saisit des informations (revenu, situation familiale, historique de crédit, etc.) dans un formulaire HTML. Ces données sont traitées côté serveur, puis transmises au modèle chargé avec Pickle pour générer une prédiction, affichée dynamiquement. L'interface est simple, réactive et accessible via une page web.",
  },
]

export default function Projects() {
  const [filter, setFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Mes <span className="text-purple-600 dark:text-purple-400">projets</span>
        </h2>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                filter === "all"
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setFilter("Data")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                filter === "Data"
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Data
            </button>
            <button
              onClick={() => setFilter("Web")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                filter === "Web"
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Web
            </button>
            <button
              
            >
          
            </button>
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
                          <video
                            src={project.image}
                            controls
                            className="w-full h-auto rounded-lg"
                          />
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
                                <video
                                            src={project.image}
                                            controls
                                            className="w-full h-auto rounded-lg"
                                          />
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
                                <div className="flex gap-4">
                                    {(project.id === 2 || project.id === 4 || project.id === 5 || project.id === 6) && project.githubUrl && (
                                      <Button variant="outline" asChild>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                          <Github className="h-4 w-4 mr-2" />
                                          Code source
                                        </a>
                                      </Button>
                                    )}
                                  </div>
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
  )
}
