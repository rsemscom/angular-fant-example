import { Injectable } from '@angular/core';
import {IApp} from "../interfaces/iapp";

@Injectable({
  providedIn: 'root'
})
export class AppsService {
  constructor() { }


  getIcons(): IApp[] {

    let result = [];

    for (let i=0; i<60; i++) {
      result.push({
          id: i,
          displayType: 'type' + Math.ceil(Math.random() * 2), // Display name of the type of app
          type: 'type'+i, // Internal name of the type of app
          url: 'http://w'+i+".com", // Homepage of the app
          iconUrl: 'fab fa-gripfire',
          family: i%2 ? 'family'+i : '',
          staticUrl: true,
          name: 'APP NAME'+i
      });
    }

    return result;
  }
}
