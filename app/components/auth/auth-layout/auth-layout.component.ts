import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {

  @Input('nav-links') navLinks: any = [];

  constructor() { }

  ngOnInit() {
  }

}
