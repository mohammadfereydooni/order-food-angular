import { Component, Input, OnInit } from '@angular/core';
import { tag }  from 'src/app/shared/models/tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit{

  @Input()

  foodPageTags?:string[]

  tags?: tag[];

    constructor( private foodServis:FoodService ){}

    ngOnInit(): void {
      if(!this.foodPageTags)
    this.tags = this.foodServis.getAllTag();
    }
}
