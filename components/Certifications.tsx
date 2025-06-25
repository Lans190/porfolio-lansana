"use client"

import React from "react"

const certifications = [
{
    title: "Certification en Développement Web– D-CLIC",
    url: "https://dclic.francophonie.org/mod/customcert/view.php?id=2715&downloadown=1",
  },
  {
    title: "Certification en Traitement de données – Force-N",
    url: "https://formation.force-n.sn/mod/customcert/view.php?id=15413&downloadown=1",
  },
  {
    title: "Python for Data Science, AI & Development - Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/JUJ80DWCTMQQ",
  },
  {
    title: "Machine Learning with Python - Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/58UBN5433YQA",
  },
  {
    title: "Google Data Analytics Capstone - Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/1VQ9P0NWQH0J",
  },
  {
    title: "Créer des chatbots basés sur l'IA sans programmation – Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/6SHB3KD3M6YH",
  },
  {
    title: "IA pour tous – Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/8EAPSGWDWYU2",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Mes Certifications
        </h2>
        <ul className="space-y-4">
          {certifications.map((cert, index) => (
            <li key={index}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium"
              >
                {cert.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
