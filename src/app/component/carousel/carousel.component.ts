import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projects, ProjectInfo } from '../const/projets';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  projects: ProjectInfo[] = Object.values(Projects);
  currentSlide = 0;
  projectsPerSlide = 3;
  animateClass = '';

  getSlideProjects(index: number): ProjectInfo[] {
    const start = index * this.projectsPerSlide;
    const end = start + this.projectsPerSlide;
    return this.projects.slice(start, end);
  }

  get totalSlides(): number {
    return Math.ceil(this.projects.length / this.projectsPerSlide);
  }

  setSlide(index: number): void {
    const direction = index > this.currentSlide ? 'animate__fadeInRight' : 'animate__fadeInLeft';
    this.animateClass = `animate__animated ${direction}`;
    this.currentSlide = index;


    setTimeout(() => {
      this.animateClass = '';
    }, 1000); 
  }
  
  nextSlide(): void {
    if (this.currentSlide < this.totalSlides - 1) {
      this.setSlide(this.currentSlide + 1);
    }
  }

  previousSlide(): void {
    if (this.currentSlide > 0) {
      this.setSlide(this.currentSlide - 1);
    }
  }
}
