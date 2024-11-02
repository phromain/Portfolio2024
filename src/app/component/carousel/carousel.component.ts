import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  projects = [
    { title: 'Projet 1', description: 'Description du projet 1', imageUrl: 'assets/image1.jpg' },
    { title: 'Projet 2', description: 'Description du projet 2', imageUrl: 'assets/image2.jpg' },
    { title: 'Projet 3', description: 'Description du projet 3', imageUrl: 'assets/image3.jpg' },
    { title: 'Projet 4', description: 'Description du projet 4', imageUrl: 'assets/image4.jpg' },
    { title: 'Projet 5', description: 'Description du projet 5', imageUrl: 'assets/image5.jpg' },
    { title: 'Projet 6', description: 'Description du projet 6', imageUrl: 'assets/image6.jpg' },
    { title: 'Projet 7', description: 'Description du projet 7', imageUrl: 'assets/image7.jpg' },
    { title: 'Projet 8', description: 'Description du projet 8', imageUrl: 'assets/image8.jpg' },
  ];

}

