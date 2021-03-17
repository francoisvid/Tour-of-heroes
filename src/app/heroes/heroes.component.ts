import {Component, Input, OnInit} from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  @Input() hero?: Hero;

  constructor(private heroService: HeroService) { }

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string, power: string): void {
    name = name.trim();
    power = power.trim();
    if (!name && !power) { return; }
    if (name !== '' || power !== '') {
      this.heroService.addHero({ name, power } as Hero)
        .subscribe(hero => {
          this.heroes.push(hero);
        });
    } else {
      alert("null")
    }
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
