import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  public name: string = 'ironMan';
  public age: number = 100;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }

  changeHero(): void {
    this.name = 'SpiderMan';
  }
  changeAge(): void {
    this.age = 200;
  }

  resetForm(): void {
    this.name = 'ironMan';
    this.age = 100;
  }
}
