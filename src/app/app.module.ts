import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HashLocationStrategy, LocationStrategy, Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { RouterModule , Routes } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {Ng2Webstorage} from 'ngx-webstorage';
import { LoadingModule,ANIMATION_TYPES } from 'ngx-loading';
import { ChartsModule } from 'ng2-charts';

//services
import { ApiService } from './services/api.service';
import { GlobalparamsService } from './services/globalparams.service';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { LoginnavbarComponent } from './layouts/loginnavbar/loginnavbar.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    NavbarComponent,
    LoginnavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    Ng2Webstorage,
    LoadingModule.forRoot({
        animationType: ANIMATION_TYPES.wanderingCubes,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
        backdropBorderRadius: '4px',
        primaryColour: '#ffffff', 
        secondaryColour: '#ffffff', 
        tertiaryColour: '#ffffff',
        fullScreenBackdrop:true
    }),
    ChartsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    ApiService,
    GlobalparamsService,
  	{
  		provide:LocationStrategy,
  		useClass:HashLocationStrategy
  	}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
