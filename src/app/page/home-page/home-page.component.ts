import { Component } from '@angular/core';
import { FooterComponent } from '../../component/template/footer/footer.component';
import { HeaderComponent } from '../../component/template/header/header.component';
import { CarouselComponent } from "../../component/carousel/carousel.component";
import { PrezComponent } from "../../component/prez/prez.component";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, CarouselComponent, PrezComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
