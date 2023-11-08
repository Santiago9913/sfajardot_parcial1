import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantRoutingModule } from './plant-routing.module';

@NgModule({
  imports: [CommonModule, PlantRoutingModule],
  exports: [PlantListComponent],
  declarations: [PlantListComponent],
})
export class PlantModule {}
