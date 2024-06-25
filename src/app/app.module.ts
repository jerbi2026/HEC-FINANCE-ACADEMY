import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import{HttpClientModule} from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeOverviewComponent } from './home-overview/home-overview.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { TodoComponent } from './todo/todo.component';
import { DocumentComponent } from './document/document.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashCalendrierComponent } from './dash-calendrier/dash-calendrier.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { DashSearchComponent } from './dash-search/dash-search.component';
import { ActualiteSearchComponent } from './actualite-search/actualite-search.component';
import { DatePipe } from '@angular/common';
import { SendMailComponent } from './send-mail/send-mail.component';
import { SendOneComponent } from './send-one/send-one.component';
import { SendPlusComponent } from './send-plus/send-plus.component';
import { SendExcelComponent } from './send-excel/send-excel.component';
import { SendNavComponent } from './send-nav/send-nav.component';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { RecruSearchComponent } from './recru-search/recru-search.component';
import { AgComponent } from './ag/ag.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    SidebarComponent,
    LoaderComponent,
    HomeOverviewComponent,
    ActualiteComponent,
    TodoComponent,
    DocumentComponent,
    NavbarComponent,
    DashCalendrierComponent,
    CalendrierComponent,
    DashSearchComponent,
    ActualiteSearchComponent,
    SendMailComponent,
    SendOneComponent,
    SendPlusComponent,
    SendExcelComponent,
    SendNavComponent,
    RecrutementComponent,
    RecruSearchComponent,
    AgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
