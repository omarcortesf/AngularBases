import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes2-hero2',
  templateUrl: './hero2.component.html',
  styleUrls: ['./hero2.component.css']
})
export class Hero2Component {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  public getHeroDescription():string{
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void{
    this.name = 'spiderman';
  }

  changeAge():void{
    this.age = 77;

  }
  resetHero():void{
    this.name = 'Ironman';
    this.age = 45;
  }

}
