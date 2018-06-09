import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ngx-webstorage';

import { ApiService } from '../services/api.service';
import { GlobalparamsService } from '../services/globalparams.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portFolio:any = [];
  currentPrice:any = [];
  isData:number = 0;

  constructor(
    private fb: FormBuilder,
    public router:Router,
    public api:ApiService,
    private toastr: ToastrService,
    public localstorage:LocalStorageService,
    public globals:GlobalparamsService
  ) { }

  ngOnInit() {
    this.api.getAuth();
    this.getPfs();    
  }


  getPfs(){
    /*this.api.callPortfolioApi()
    .then(
      d=>{
        console.log(d)
        let dt = JSON.parse(JSON.stringify(d));
        if(dt){
          this.currentPrice = {btc_price_usd:dt.btc_price,eth_price_usd:dt.eth_price_usd};
          let data = dt.a;
          _.forEach(data,(value,key)=>{
            this.portFolio.push({
              amount:value.amount,
              currency:(value.currency).toString().toUpperCase(),
              currencylower:value.currency,
              market:value.market,
              price:value.price,
              type:(value.type).toString().toUpperCase(),
              typelower:value.type,
              user:value.user
            });  
          });
          this.portFolio = ;
          this.isData = 2;
        }else{
          this.isData = 1;
        }
      },
      e=>{
        //console.log(e)
        this.isData = 1;
      }
    ).catch(e=>{
        //console.log(e)
        this.isData = 1;
    })*/


    let dt = this.api.fakeData();
    if(dt){
      this.currentPrice = {btc_price_usd:dt.btc_price,eth_price_usd:dt.eth_price_usd};
      let data = dt.a;
      _.forEach(data,(value,key)=>{
        let pftype = "SELL";
        if(value.type == 'bid'){  
          pftype = "SELL";
        }else if(value.type == 'ask'){
          pftype = "SELL";
        }
        this.portFolio.push({
          rowid:(key+1),
          amount_main:value.amount,
          amount:this.api.calcsubstr(value.amount),
          currency:(value.currency).toString().toUpperCase(),
          currencylower:value.currency,
          market:value.market,
          price_main:value.price,
          price:this.api.calcsubstr(value.price),
          type:(value.type).toString().toUpperCase(),
          typelower:value.type,
          user:value.user
        });  
      });
      console.log(this.portFolio,dt);
      this.isData = 2;
    }else{
      this.isData = 1;
    }
  }



  

}
