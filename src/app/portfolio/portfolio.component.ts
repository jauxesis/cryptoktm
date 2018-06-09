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
    
  }

  

}
