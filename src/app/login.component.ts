import { Component } from '@angular/core';
import { AuthService } from './auth.service'
@Component({
  selector: 'login',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>
          <h4>Login</h4>
        </mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <form>
          <mat-form-field>
              <input [(ngModel)]="loginData.email" name = "email" matInput placeholder="email" type ="email">
          </mat-form-field>
          <br>
          <mat-form-field>
              <input [(ngModel)]="loginData.pwd" name = "password" matInput placeholder="password" type ="password">
          </mat-form-field>
          <br>
          
          <button (click)="post()" mat-raised-button color ="primary" routerLink="/">Login</button>
          <br> <h5>{{authService.errorn}}</h5>
        </form>
       </mat-card-content>
    </mat-card>
  `
})
export class LoginComponent {
   loginData = {}

   constructor( private authService: AuthService){}

   post(){

     this.authService.loginUser(this.loginData)
   }
}
