import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'testing', 'https://live.staticflickr.com/7864/47044929942_fc84a2bccf_b.jpg')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
