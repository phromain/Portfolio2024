export interface ProjectInfo {
    id: number;
    title: string;
    category: number;
    techno: string;
    description: string;
    imageUrl: string;
    projectUrl: string;  
    githubUrl: string;   
}

export const Projects: { [id: number]: ProjectInfo } = {
    1: { 
        id: 1, 
        title: 'Find Movie Stream', 
        category: 1, 
        techno: 'Angular et TypeScript', 
        description: 'L\'app permet aux utilisateurs de rechercher des films et de découvrir sur quelles plateformes de streaming ils sont disponibles. Elle utilise une API pour obtenir des informations actualisées sur les films et leurs disponibilités.', 
        imageUrl: 'assets/img/projets/FindMovieStream.png', 
        projectUrl: 'https://phromain.github.io/findMovieStream/', 
        githubUrl: 'https://github.com/phromain/findMovieStream' 
    },
    2: { 
        id: 2, 
        title: 'Monitoring IoT Simulation',  
        category: 2, 
        techno: 'Symfony, PHP, JavaScript et Twig',
        description: 'Développement d’un site web de monitoring de modules IoT pour un test technique avec JavaScript pour générer les données.',
        imageUrl: 'assets/img/projets/Monitoring.png', 
        projectUrl: 'En cours de déploiement',  
        githubUrl: 'https://github.com/phromain/monitoringIotSimulation' 
    },
    3: { 
        id: 3, 
        title: 'Rsschool', 
        category: 3, 
        techno: 'Angular et TypeScript', 
        description: 'Création d\'un site vitrine pendant un séminaire pour une soutenance sur la RSE (Responsabilité Sociétale des Entreprises) revue pour les écoles avec un questionnaire et un résultat sous forme de graphique.',  
        imageUrl: 'assets/img/projets/rsschool.png', 
        projectUrl: 'https://phromain.github.io/rsschool/', 
        githubUrl: 'https://github.com/phromain/rsschool' 
    },
    4: { 
        id: 4, 
        title: 'Sportsman', 
        category: 2, 
        techno: 'Angular et TypeScript',
        description: 'Création d\'un site pour un test technique avec un questionnaire pour établir son profil mental de sportif, avec des résultats sous forme de graphique et possibilité de télécharger le résultat sous format PDF.', 
        imageUrl: 'assets/img/projets/Sportsman.png', 
        projectUrl: 'https://phromain.github.io/Sportsman/', 
        githubUrl: 'https://github.com/phromain/Sportsman' 
    },
    5: { 
        id: 5, 
        title: 'Api-Ban', 
        category: 3, 
        techno: 'HTML, CSS et JavaScript', 
        description: 'Ce projet utilise l\'API Adresse (Base Adresse Nationale - BAN) pour l\'auto-complétion et la vérification d\'adresses.',
        imageUrl: 'assets/img/projets/ApiBan.png', 
        projectUrl: 'https://phromain.github.io/API-BAN/', 
        githubUrl: 'https://github.com/phromain/API-BAN' 
    },
    6: { 
        id: 6, 
        title: 'Parc un jour, Parc toujours', 
        category: 1, 
        techno: 'Angular, TypeScript, Java, Quarkus et Spring', 
        description: 'Développement d’un site web permettant de trier les parcs selon différents critères. Le site utilise une API en Spring, une API pour les images en Quarkus, et un service d\'API key en Quarkus.',  
        imageUrl: 'assets/img/projets/Parc.png',
        projectUrl: 'En cours de déploiement',  
        githubUrl: 'https://github.com/phromain/ang-parc' 
    },
    7: { 
        id: 7, 
        title: 'Le MasterMind', 
        category: 1, 
        techno: 'HTML, CSS et JavaScript', 
        description: 'Ce projet est une implémentation du jeu de société Mastermind. C\'est l\'un de mes premiers projets dans le cadre de ma formation de Développeur Web et Web Mobile.',
        imageUrl: 'assets/img/projets/Mastermind.png', 
        projectUrl: 'https://phromain.github.io/Le-MasterMind/', 
        githubUrl: 'https://github.com/phromain/Le-MasterMind' 
    },
    8: { 
        id: 8, 
        title: 'Le Pendu', 
        category: 3, 
        techno: 'HTML, CSS et JavaScript', 
        description: 'Ce projet est une implémentation du jeu du Pendu. C\'est l\'un de mes premiers projets dans le cadre de ma formation de Développeur Web et Web Mobile.',  
        imageUrl: 'assets/img/projets/Pendu.png', 
        projectUrl: 'https://phromain.github.io/Le-Pendu/', 
        githubUrl: 'https://github.com/phromain/Le-Pendu' 
    },
    9: { 
        id: 9, 
        title: 'Projet en cours', 
        category: 3, 
        techno: 'Bientôt disponible', 
        description: 'Un nouveau projet passionnant est en cours de développement. Restez à l\'écoute pour plus de détails !', 
        imageUrl: 'assets/img/projets/Placeholder.png',
        projectUrl: '#', 
        githubUrl: '#' 
    },
    
};
