import { CalendrierComponent } from './calendrier/calendrier.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteguardService } from './routeguard.service';
import { ActualiteComponent } from './actualite/actualite.component';
import { DocumentComponent } from './document/document.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { AgComponent } from './ag/ag.component';

const routes: Routes = [
  {path:'login',component:LoginFormComponent},
  {path:'home',component:DashboardComponent /*canActivate: [RouteguardService]*/},
  {path:'actualite',component:ActualiteComponent},
  {path:'document',component:DocumentComponent},
  {path:'calendrier',component:CalendrierComponent},
  {path:'send_mail',component:SendMailComponent},
  {path:'recru',component:RecrutementComponent},
  {path:'ag',component:AgComponent},
 
  {path: '**', component: LoginFormComponent},

  {path:"",redirectTo:"/login" , pathMatch:'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
