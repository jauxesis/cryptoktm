import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
  	public router:Router,
  	public localstorage:LocalStorageService
  ) { }

  ngOnInit() {
  }

  logout(){
    this.localstorage.clear();
  	this.router.navigate(["login"]);
  }

  portfolio(){
  	this.router.navigate(["portfolio"]);
  }
}
