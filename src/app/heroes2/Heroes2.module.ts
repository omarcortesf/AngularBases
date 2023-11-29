import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { Hero2Component } from "./hero2/hero2.component";
import { List2Component } from "./list2/list2.component";



@NgModule({
  declarations:[
    Hero2Component,
    List2Component,
  ],
  exports:[
    Hero2Component,
    List2Component,
  ],
  imports:[
    CommonModule
  ]
})
export class Heroes2Module {}
