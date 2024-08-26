import { Component } from '@angular/core';  
import { CardsProjectsComponent } from "../../elements/cards-projects/cards-projects.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CardsProjectsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  }
