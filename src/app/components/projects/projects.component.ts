import { Component } from '@angular/core';  
import { CardsProjectsComponent } from "../../elements/cards-projects/cards-projects.component";
import { CommonModule } from '@angular/common';
import { link } from 'node:fs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CardsProjectsComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  cards  = [
    {title:"Galaxy Tech", link: "https://github.com/Caio-Henriquee/Galaxy-Tech---Ecommerce"},
    {title:"Carone", link: "https://github.com/Caio-Henriquee/Carone"},
    {title:"Portifolio", link:"https://github.com/Caio-Henriquee/Portifolio"},
    {title:"OngCats", link: "https://github.com/Caio-Henriquee/OngCats"}
  ]

  }
