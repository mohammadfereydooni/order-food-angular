import { Component, OnInit } from '@angular/core';

import { FoodService } from '../services/food/food.service';
import { food } from '../shared/models/foods';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foods:food[] = [];
  constructor( private foodservis:FoodService, private route:ActivatedRoute ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
      this.foods = this.foodservis.getAllFoodsBySearchTerm(params['searchTerm'])
      else if (params['tag'])

      this.foods = this.foodservis.getAllFoodsByTag(params['tag']);

      else
      this.foods = this.foodservis.getAll();
    })

    
  }

}
