import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', power: 'Really Smart', alterEgo: 'test' },
      { id: 12, name: 'Narco', power: 'Super Flexible', alterEgo: 'test2' },
      { id: 13, name: 'Bombasto', power: 'Super Hot', alterEgo: 'test' },
      { id: 14, name: 'Celeritas', power: 'Weather Change', alterEgo: 'test' },
      { id: 15, name: 'Magneta', power: 'Really Smart', alterEgo: 'test' },
      { id: 16, name: 'RubberMan', power: 'Super Flexible', alterEgo: 'test' },
      { id: 17, name: 'Dynama', power: 'Super Hot', alterEgo: 'test' },
      { id: 18, name: 'Dr IQ', power: 'Weather Change', alterEgo: 'test' },
      { id: 19, name: 'Magma', power: 'Really Smart', alterEgo: 'test' },
      { id: 20, name: 'Tornado', power: 'Really Smart', alterEgo: 'test' },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
