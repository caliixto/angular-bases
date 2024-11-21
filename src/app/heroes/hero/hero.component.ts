import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

public name: string = "iron Man";
public age: number = 45;


get capitalizeName():string{
  return this.name.toUpperCase();
}

getHeroDescription():string{
return `${this.name}-${this.age}`
}

changeHero():void{
 this.name = "Batman";

}


changeAge():void{
this.age= 37;
}

resetForm(): void{
  this.name = "iron Man";
  this.age= 45;
}

}
