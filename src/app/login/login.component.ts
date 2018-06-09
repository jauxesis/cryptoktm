import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ngx-webstorage';

import { ApiService } from '../services/api.service';
import { GlobalparamsService } from '../services/globalparams.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
  private fb: FormBuilder,
  public router:Router,
  public api:ApiService,
  private toastr: ToastrService,
  public localstorage:LocalStorageService,
  public globals:GlobalparamsService
  ) {
    this.loginForm = fb.group({
        FormName: ['', Validators.required],
        FormPass: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
  	this.localstorage.store("CryptoKTMisAuth",false);
  	/*this.api.callGetApi()
  	.then(
  		d=>{
  			console.log(d)
  		},
  		e=>{
  			console.log(e)
  		}
  	)*/
  }

  jsUcfirst(string) 
  { 
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  login() {
  	console.log(this.loginForm.value,this.loginForm.valid);
  	if(!this.loginForm.valid){
		this.toastr.warning('Name and Password is invalid', null,{timeOut:4000});
  	}else{
	  	if( this.loginForm.value.FormName == "" || this.loginForm.value.FormName == null){
	  		this.toastr.error('Name is required', null,{timeOut:4000});
	  	}else if( this.loginForm.value.FormPass != "abcd1234" ){
			this.toastr.error('Name is required', null,{timeOut:4000});
	  	}else{
	  		let name = this.loginForm.value.FormName;
	  		this.localstorage.store("CryptoKTMName",name);
	  		name = this.jsUcfirst(this.localstorage.retrieve("CryptoKTMName"));
		  	this.toastr.success('Welcome '+name, null,{timeOut:4000});
		  	this.localstorage.store("CryptoKTMisAuth",true);
	  		this.router.navigate(["home"]);
	  	}
  	}
  	
  }

}
