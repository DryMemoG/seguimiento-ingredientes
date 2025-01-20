import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
interface Module {
  title: string;
  description: string;
  route: string;
}


@Component({
  selector: 'app-main',
  imports: [MatCardModule, MatGridListModule, CommonModule, MatIconModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  modules: Module[] = [
    {title: "Ingredientes", description: "Registro de ingredientes diponibles", route: '/ingredientes'},
    {title: "Medidas", description: "Unidades de medida de los ingredientes comprados", route: '/tipo-cantidad'},
    {title: "Consumos", description: "Registro de los consumos de ingredientes", route:'/consumos'},
    {title: "recetas", description: "Registro de las recetas realizadas", route:"/recetas"}
  ];

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
