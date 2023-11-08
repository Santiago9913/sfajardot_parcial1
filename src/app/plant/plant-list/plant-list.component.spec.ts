/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PlantListComponent } from './plant-list.component';
import { PlantService } from './plant.service';
import { Plant } from '../plant';
import { HttpClientModule } from '@angular/common/http';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantListComponent],
      providers: [PlantService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const plant = new Plant(
        faker.number.int(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.number.int(),
        faker.lorem.word(),
        faker.lorem.word()
      );
      component.plants.push(plant);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 <tr.table-item> elements', () => {
    expect(debug.queryAll(By.css('th.item-id'))).toHaveSize(3);
  });

  it('should have 8 <div.col-lg-4> elements', () => {
    expect(debug.queryAll(By.css('td.item-name'))).toHaveSize(3);
  });

  it('should have 8 <div.col-lg-4> elements', () => {
    expect(debug.queryAll(By.css('td.item-type'))).toHaveSize(3);
  });

  it('should have 8 <div.col-lg-4> elements', () => {
    expect(debug.queryAll(By.css('td.item-weather'))).toHaveSize(3);
  });
});
