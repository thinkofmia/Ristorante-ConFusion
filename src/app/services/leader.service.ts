import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http:HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getLeaders(): Observable<Leader[]>{
    return this.http.get<Leader[]>(baseURL + 'leadership')
      .pipe(catchError(this.processHTTPMsgService.handleError));
    //return of(LEADERS).pipe(delay(2000));
    //return LEADERS;
  }

  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leadership/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    //return of(LEADERS.filter((lead)=> (lead.id == id))[0]).pipe(delay(2000));
    //return LEADERS.filter((lead)=> (lead.id == id))[0];
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leadership?featured=true')
      .pipe(map(lead => lead[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
      //return of(LEADERS.filter((lead)=> lead.featured)[0]).pipe(delay(2000)); 
      //return LEADERS.filter((lead)=> lead.featured)[0];
    }
}
