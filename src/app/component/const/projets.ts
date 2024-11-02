export interface ProjectInfo {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

export const Projects: { [id: number]: ProjectInfo } = {
    1: { id: 1, title: 'Projet 1', description: 'Description du projet 1', imageUrl: 'assets/img/projets/1.jpg' },
    2: { id: 2, title: 'Projet 2', description: 'Description du projet 2', imageUrl: 'assets/img/projets/1.jpg' },
    3: { id: 3, title: 'Projet 3', description: 'Description du projet 3', imageUrl: 'assets/img/projets/1.jpg' },
    4: { id: 4, title: 'Projet 4', description: 'Description du projet 4', imageUrl: 'assets/img/projets/1.jpg' },
    5: { id: 5, title: 'Projet 5', description: 'Description du projet 5', imageUrl: 'assets/img/projets/1.jpg' },
    6: { id: 6, title: 'Projet 6', description: 'Description du projet 6', imageUrl: 'assets/img/projets/1.jpg' },
    7: { id: 7, title: 'Projet 7', description: 'Description du projet 7', imageUrl: 'assets/img/projets/1.jpg' },
    8: { id: 8, title: 'Projet 8', description: 'Description du projet 8', imageUrl: 'assets/img/projets/1.jpg' },
};
