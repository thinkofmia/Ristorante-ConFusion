import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[]{
    return LEADERS;
  }

  getPromotion(id: string): Leader {
    return LEADERS.filter((lead)=> (lead.id == id))[0];
  }

  getFeaturedPromotion(): Leader {
    return LEADERS.filter((lead)=> lead.featured)[0];
  }
}
