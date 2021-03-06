import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http'; //HttpClientModule to simulate conection

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; //modules to simulate data server
import { InMemoryDataService } from './services/in-memory-data.service'; //modules to simulate data server

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeamComponent } from './team/team.component';
import { GeneralTableComponent } from './general-table/general-table.component';
import { TeamsComponentComponent } from './teams-component/teams-component.component';


import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UpdateTeamComponent } from './update-team/update-team.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginService } from './services/login.service';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TeamComponent,
    GeneralTableComponent,
    TeamsComponentComponent,
    LoginComponent,
    WelcomeComponent,
    UpdateTeamComponent,
    SignUpComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,/*
    HttpClientInMemoryWebApiModule.forRoot(         //Import modules to simulate data server
  InMemoryDataService, { dataEncapsulation: false }   //import simulate data service  
  ) //import simulate data service  */
  ],
  providers: [
    LoginService,
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
