import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from './plant.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css'],
})
export class PlantListComponent implements OnInit {
  plants: Array<Plant> = [];
  insidePlants: number = 0;
  outisdePlants: number = 0;

  constructor(private plantService: PlantService) {}

  countPlants(): void {
    this.insidePlants = this.plants.filter(
      (plant) => plant.tipo === 'Interior'
    ).length;
    this.outisdePlants = this.plants.filter(
      (plant) => plant.tipo === 'Exterior'
    ).length;
  }

  getPlants(): void {
    this.plantService.getPlants().subscribe((plants) => {
      this.plants = plants;
      this.countPlants();
    });
  }

  ngOnInit() {
    this.getPlants();
  }
}
