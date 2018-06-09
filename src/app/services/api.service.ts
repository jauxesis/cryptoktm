import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';

import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import * as CryptoJS from 'crypto-js';

import { GlobalparamsService } from './globalparams.service';

@Injectable()
export class ApiService {

  url:any;	

  constructor(
    public http:Http,
    private localstorage:LocalStorageService,
    private sessionStorage:SessionStorageService,
    public globalparamsService:GlobalparamsService,
    public router:Router
  ) { 
  	this.url = this.globalparamsService.apiLink;
  }

  callGetApi(){
  	return new Promise((resolve,reject)=>{
  		this.http.get(this.url+"dataset/coin/ethereum")
  		.map(res=>res.json())
  		.subscribe(
  			d=>resolve(d),
  			e=>reject(e)
  		);
  	});
  }


  getAuth(){
    let isAuth = this.localstorage.retrieve("CryptoKTMisAuth");
  	if(isAuth == true){
  		// do nothing
  	}else{
  		// redirect
  		this.router.navigate(["login"]);
  	}
  }

  saveToLocal(name,str){
    try{
	    let token = "App-CryptoKTM";
	    //console.log(token)
	    let storeStr = (CryptoJS.AES.encrypt(str,token)).toString();
	    //console.log(storeStr)
	    this.localstorage.store(name,storeStr);
    }catch(e){}
  }

  retrieveFromLocal(name):any{
  	try{  
	    let token = "App-CryptoKTM";
	    let fromStorage = this.localstorage.retrieve(name);
	    //console.log(fromStorage)
	    if(fromStorage == "" || fromStorage == null){
	      return "";
	    }else{
	      let getDecrypt = CryptoJS.AES.decrypt(fromStorage,token);
	      let finalStr = "";
	      finalStr = getDecrypt.toString(CryptoJS.enc.Utf8);
	      return finalStr;
	    }
    }catch(e){}
  }

}
