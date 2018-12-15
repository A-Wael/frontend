import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from '@angular/router'

import { FormsModule } from '@angular/forms'

import { MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatListModule } from '@angular/material'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ApiService } from './api.service'
import { AuthService } from './auth.service'
import { MessagesComponent } from './messages.component'
import { from } from 'rxjs'
import { RegisterComponent } from './register.component'
import { provideForRootGuard, ROUTER_FORROOT_GUARD } from '@angular/router/src/router_module';
import { LoginComponent } from './login.component'
import { UsersComponent } from './users.component'
import { ProfileComponent } from './profile.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import {PostComponent } from './post.component'
import { AuthInterceptorService } from './authInterceptor.service';
import { HomeComponent } from './home/home.component'
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SellComponent } from './sell/sell.component' ;

var routes:Routes = [
  { path: '', redirectTo :'home' , pathMatch:'full'},
  { path: '', component: PostComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sell', component: SellComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    PostComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    SellComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, MatCardModule, MatToolbarModule, RouterModule.forRoot(routes), MatInputModule,
    MatListModule
  ],
  providers: [ApiService, AuthService,{ 
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
