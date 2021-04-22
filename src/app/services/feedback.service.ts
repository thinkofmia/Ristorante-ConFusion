import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getFeedback(): Observable<Feedback>{
      return this.http.get<Feedback>(baseURL + 'feedback')
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }

  submitFeedback(feedback: Feedback): Observable<Feedback> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.put<Feedback>(baseURL + 'feedback' , feedback, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}