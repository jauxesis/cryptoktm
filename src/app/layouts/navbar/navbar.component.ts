import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
  	public router:Router,
  ) { }

  ngOnInit() {
  }

  logout(){
  	this.router.navigate(["login"]);
  }

  portfolio(){
  	this.router.navigate(["portfolio"]);
  }
}
