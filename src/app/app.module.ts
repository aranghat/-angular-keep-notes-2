import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from 'src/app/header/header.component';
import { AppComponent } from 'src/app/app.component';
import { LoginComponent } from 'src/app/login/login.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { NotesService } from './services/notes.service';
import { RouterService } from './services/router.service';
import { AuthenticationService } from './services/authentication.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms'
import { CanActivateRouteGuard } from 'src/app/can-activate-route.guard';

const route: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CanActivateRouteGuard]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'

  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule
  ],
  providers: [NotesService,
    RouterService,
    AuthenticationService,CanActivateRouteGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
