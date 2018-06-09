import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginComponent } from './login/login.component';

const routes:Routes = [
	{
		path:'',
		component:LoginComponent
	},
	{
		path:'home',
		component:HomeComponent
	},
	{
		path:'login',
		component:LoginComponent
	},
	{
		path:'portfolio',
		component:PortfolioComponent
	},
	{
		path:'**',
		component:LoginComponent
	}
];

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})

export class AppRoutingModule {}