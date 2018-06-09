import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user:any;

  constructor(
  	public router:Router,
  	public localstorage:LocalStorageService
  ) { }

  ngOnInit() {
    this.user = this.jsUcfirst(this.localstorage.retrieve("CryptoKTMName"));
  }

  jsUcfirst(string) 
  { 
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  logout(){
    this.localstorage.clear();
  	this.router.navigateByUrl("login");
  }

  portfolio(){
  	this.router.navigate(["portfolio"]);
  }
}
