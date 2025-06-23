import qrcode
import os
import webbrowser
from flask import Flask, render_template_string, send_from_directory
import threading
import time

# Configuration - Modifiez ces variables avec vos informations
NOM = "Lansana Mané"
TITRE = "Développeur Data"
EMAIL = "mlansana16@gmail.com"
TELEPHONE = "+221 78 416 68 92"
GITHUB = "https://github.com/jeandupont"
LINKEDIN = "https://linkedin.com/in/jeandupont"
COMPETENCES = ["Python", "JavaScript", "React", "Flask", "Docker", "Git"]
EXPERIENCES = [
    {
        "titre": "Développeur Senior",
        "entreprise": "Tech Solutions",
        "periode": "2020 - Présent",
        "description": "Développement d'applications web avec React et Python."
    },
    {
        "titre": "Développeur Full Stack",
        "entreprise": "Digital Agency",
        "periode": "2018 - 2020",
        "description": "Création de sites web et d'applications mobiles."
    }
]
FORMATION = [
    {
        "diplome": "Master en Informatique",
        "ecole": "Université de Paris",
        "annee": "2018"
    },
    {
        "diplome": "Licence en Informatique",
        "ecole": "Université de Lyon",
        "annee": "2016"
    }
]

# Création du répertoire pour les fichiers statiques
os.makedirs('static', exist_ok=True)

# Création du code QR
def generer_qr_code(url, fichier_sortie):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)
    
    img = qr.make_image(fill_color="black", back_color="white")
    img.save(fichier_sortie)
    return fichier_sortie

# Template HTML pour le CV
html_template = """
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV - {{ nom }}</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
        }
        header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #3498db;
            padding-bottom: 20px;
        }
        h1 {
            color: #2c3e50;
            margin-bottom: 5px;
        }
        h2 {
            color: #3498db;
            border-bottom: 1px solid #eee;
            padding-bottom: 5px;
            margin-top: 25px;
        }
        .contact-info {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 15px;
            margin-top: 15px;
        }
        .contact-item {
            display: flex;
            align-items: center;
        }
        .section {
            margin-bottom: 25px;
        }
        .experience, .education {
            margin-bottom: 20px;
        }
        .experience h3, .education h3 {
            margin-bottom: 5px;
            color: #2c3e50;
        }
        .period, .company, .school {
            color: #7f8c8d;
            font-style: italic;
            margin-bottom: 5px;
        }
        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .skill {
            background-color: #3498db;
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
        }
        .social-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
        }
        .social-link {
            display: inline-block;
            padding: 10px 15px;
            background-color: #3498db;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
        }
        .social-link:hover {
            background-color: #2980b9;
        }
        .qr-section {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #3498db;
        }
        .qr-code {
            max-width: 200px;
            margin: 0 auto;
        }
        @media print {
            .no-print {
                display: none;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>{{ nom }}</h1>
        <p>{{ titre }}</p>
        <div class="contact-info">
            <div class="contact-item">{{ email }}</div>
            <div class="contact-item">{{ telephone }}</div>
        </div>
        <div class="social-links">
            <a href="{{ github }}" class="social-link" target="_blank">GitHub</a>
            <a href="{{ linkedin }}" class="social-link" target="_blank">LinkedIn</a>
        </div>
    </header>

    <section class="section">
        <h2>Compétences</h2>
        <div class="skills">
            {% for competence in competences %}
            <span class="skill">{{ competence }}</span>
            {% endfor %}
        </div>
    </section>

    <section class="section">
        <h2>Expérience Professionnelle</h2>
        {% for exp in experiences %}
        <div class="experience">
            <h3>{{ exp.titre }}</h3>
            <div class="company">{{ exp.entreprise }}</div>
            <div class="period">{{ exp.periode }}</div>
            <p>{{ exp.description }}</p>
        </div>
        {% endfor %}
    </section>

    <section class="section">
        <h2>Formation</h2>
        {% for form in formation %}
        <div class="education">
            <h3>{{ form.diplome }}</h3>
            <div class="school">{{ form.ecole }}</div>
            <div class="period">{{ form.annee }}</div>
        </div>
        {% endfor %}
    </section>

    <section class="qr-section">
        <h2>Scannez pour accéder à mon CV en ligne</h2>
        <img src="/static/qrcode.png" alt="QR Code" class="qr-code">
    </section>
</body>
</html>
"""

# Création de l'application Flask
app = Flask(__name__, static_folder='static')

@app.route('/')
def cv():
    return render_template_string(html_template, 
                                 nom=NOM, 
                                 titre=TITRE, 
                                 email=EMAIL, 
                                 telephone=TELEPHONE, 
                                 github=GITHUB, 
                                 linkedin=LINKEDIN, 
                                 competences=COMPETENCES, 
                                 experiences=EXPERIENCES, 
                                 formation=FORMATION)

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

def ouvrir_navigateur():
    # Attendre que le serveur démarre
    time.sleep(1)
    # Ouvrir le navigateur
    webbrowser.open('http://127.0.0.1:5000')

if __name__ == '__main__':
    # Générer le code QR pour l'URL locale
    generer_qr_code('http://127.0.0.1:5000', 'static/qrcode.png')
    
    # Lancer le navigateur dans un thread séparé
    threading.Thread(target=ouvrir_navigateur).start()
    
    print("Démarrage du serveur CV interactif...")
    print("Scannez le code QR pour accéder au CV depuis un appareil mobile sur le même réseau")
    print("Appuyez sur Ctrl+C pour arrêter le serveur")
    
    # Démarrer le serveur Flask
    app.run(host='0.0.0.0', debug=False)
