import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import {IUserApp} from "../interfaces/iuser-app";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getCurrentUser():Observable<IUserApp> {
    return of(<IUserApp>{
      id: '1',
      appId: '2',
      userId: '3',
      groupName: '4',
      url: '5',
      displayName: 'Username',
      iconUrl: 'https://bipbap.ru/wp-content/uploads/2017/10/00-russia-new-year-2017-020117-220x220.jpg'
    });
  }
}
