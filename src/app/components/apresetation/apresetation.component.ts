import { Component } from '@angular/core';
import { CardApresetationComponent } from '../../elements/card-apresetation/card-apresetation.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-apresetation',
  standalone: true,
  imports: [CardApresetationComponent,CommonModule],
  templateUrl: './apresetation.component.html',
  styleUrl: './apresetation.component.css'
})

export class ApresetationComponent {

  ePar(index:number) : Boolean{
    return index % 2 === 0
  }

  cards = [
    {title:"Ciencias da Computação", instituicao: "FUMEC", formacao: "Início: 2022 – Término: 2026"},
    {title:"‎ ‎ Tecnico em Edificações ", instituicao: "IFMG", formacao: "Início: 2018 – Término: 2021"},
    {title:"Aprendizagem Desenvolvimento WEB ", instituicao: "SENAI ", formacao: "Início: 2023 – Término: 2023"},
  ]

}
