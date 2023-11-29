import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes2-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component {

  public heroNames: string[] = ['Spiderman','Ironman', 'Batman', 'Wonder Woman', 'Hulk']
  public deletedHero?: string;

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
  }
}
