import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/template/header/header.component";
import { FooterComponent } from "../../component/template/footer/footer.component";
import { CarouselComponent } from "../../component/carousel/carousel.component";

@Component({
  selector: 'app-projets-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CarouselComponent],
  templateUrl: './projets-page.component.html',
  styleUrl: './projets-page.component.css'
})
export class ProjetsPageComponent {

}
