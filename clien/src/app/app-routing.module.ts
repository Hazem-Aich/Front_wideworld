import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FinddoctorComponent } from './finddoctor/finddoctor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [


  {path: '' , component:HeaderComponent ,
    children :[
       {path: '' , component:HomeComponent },
       {path: 'loginPatient' , component:LoginComponent },
       {path: 'doctor' , component:FinddoctorComponent }
    ]},
  {path: 'home' , component: NavbarComponent,
    children :[
       {path: '' , component:FinddoctorComponent},
    ],canActivate: [AuthGuard]},





];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
