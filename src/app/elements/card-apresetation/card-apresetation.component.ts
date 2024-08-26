import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-apresetation',
  standalone: true,
  imports: [],
  templateUrl: './card-apresetation.component.html',
  styleUrl: './card-apresetation.component.css'
})
export class CardApresetationComponent {
  @Input() card: any

}
