import { Injectable } from '@angular/core';

@Injectable()
export class GlobalparamsService {

  constructor() { }

  apiLink:any = "http://13.126.248.75:8080/";
  //http://13.126.248.75:8080/dataset/coin/ethereum

  javaLink:any = "http://192.168.4.43:7070/tranactions/0x03e2ea82c1d3ea69cfaacadeba79f42360c26939";


  potfolioLink:any = "http://192.168.4.50:5000/get_trade_history/";

}
