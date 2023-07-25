import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { food } from '../shared/models/foods';

@Component({
  selector: 'app-foopage',
  templateUrl: './foopage.component.html',
  styleUrls: ['./foopage.component.scss']
})
export class FoopageComponent implements OnInit{

  food !:food;

  constructor( private activatedRout: ActivatedRoute, foodservice: FoodService){
    activatedRout.params.subscribe((params) =>{
      if(params['id'])
      this.food =foodservice.getAllById(params['id'])
    })
  }

  ngOnInit(): void {
    
  }
}
