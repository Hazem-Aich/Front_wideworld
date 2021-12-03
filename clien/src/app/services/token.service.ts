import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import {ApiService} from './api.service'

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private subject = new Subject<any>();
  private keepAfterRouteChange = false;

 constructor(private router: Router ,private userService: ApiService) { }
 intercept(req, next) {
  let tokenizeReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${this.userService.getToken()}`
    }
  });
  return next.handle(tokenizeReq);
}}
