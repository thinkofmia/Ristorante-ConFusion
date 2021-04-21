import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  dishErrMess: string;
  promotion: Promotion;
  promoErrMess: string;
  leader: Leader;
  leadErrMess: string;
  
  constructor(private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getFeaturedDish()
      //.then((dish) => this.dish = dish);
      .subscribe((dish) => this.dish = dish,
        errmess => this.dishErrMess = <any>errmess);
    //this.promotion = this.promotionService.getFeaturedPromotion();
    this.promotionService.getFeaturedPromotion()
      .subscribe(
        (promo) => this.promotion = promo,
        errmess => this.promoErrMess = <any>errmess
      );
    //this.leader = this.leaderService.getFeaturedLeader();
    this.leaderService.getFeaturedLeader()
      .subscribe((leader)=> this.leader = leader,
      errmess => this.leadErrMess = <any>errmess);
  }

}
