import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
//import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //dishes = DISHES;
  dishes: Dish[];

  //selectedDish: Dish;

  constructor(private dishService: DishService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getDishes()
      //.then((dishes) => this.dishes = dishes);
      .subscribe((dishes) => this.dishes = dishes);
  }

  /*onSelect(dish: Dish){
    this.selectedDish = dish;
  }*/

}
