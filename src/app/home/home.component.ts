import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  markets:any = [];
  isData:any = 0;
  exchanges:any = [];

  sums:any = [];

  constructor(
  	public api:ApiService
  ) { }

  //chart
  // Doughnut
  public doughnutChartLabels:string[] = ['Sell', 'Buy'];
  public doughnutChartData:number[] = [0,0];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  ngOnInit() {
    this.api.getAuth();
    this.getTxs();
  }

  getTxs(){
    this.api.callTxApi()
    .then(
      d=>{
        let dt = JSON.parse(JSON.stringify(d));
        if(dt.result != null && (dt.result).length > 0){
          let rows = dt.result;
          _.forEach(rows,(value,key) => {
            let type = "SELL"; //0 sell 1 buy
            if(value.type == 0){
              type = "SELL";
            }else{
              type = "BUY";
            }
            this.markets.push({
              rowid:(key+1),
              amount:value.amount,
              atPrice:value.atPrice,
              contractAddress:value.contractAddress,
              cryptType:value.cryptType,//type
              excId:value.excId,//name
              timestamp:value.timestamp,
              humantimestamp:this.humantime(value.timestamp),
              txId:value.txId,
              type:type,
              valuetype:value.type
            })

          });

          this.exchanges = _.uniqBy(this.markets,function(o){return o.excId});
          let a = _.map(this.markets,function(o){if(o.valuetype == 0){return o;} });
          a = _.without(a, undefined)
          let b = _.map(this.markets,function(o){if(o.valuetype == 1){return o;} });
          b = _.without(b, undefined)

          this.sums = [a.length,b.length];
          // console.log(this.sums,a,b)
          this.doughnutChartData = [a.length,b.length]
          this.isData = 2;
          //console.log(this.markets)
        }else{
          this.isData = 1;
        }
      },
      e=>{
        this.isData = 1;
        //console.log(e)
      }
    ).catch(e=>{
      this.isData = 1;
      //console.log(e)
    })
  }

  humantime(timestamp){
    return moment.unix(timestamp).format("DD/MM/YYYY");
  }

  
}
