import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()

export class AuthService {
    messages = []
    path = 'http://localhost:3000/auth'
    erroem: string =""
    erroen:  string =""
    TOKEN_KEY = 'token'
    constructor(private http: HttpClient) {}
    
    get token(){
        return localStorage.getItem(this.TOKEN_KEY)
    }

    get isAuthenticated(){
        return !!localStorage.getItem(this.TOKEN_KEY)
    }

    logout(){
        localStorage.removeItem(this.TOKEN_KEY)
    }
    
    registerUser(registerData) {
        this.http.post<any>(this.path + '/register',registerData).subscribe(res => {
            this.saveToken(res.token)
         }, error =>{
             if(error.status ==401){
                 this.erroem= "Email IS Invalid"
             }
         })
    }
    loginUser(loginData) {
        this.http.post<any>(this.path + '/login',loginData).subscribe(res => {
            this.saveToken(res.token)
         }, error =>{
             if(error.status ==401){
                 this.erroen= "Email Or Password  Invalid"
             }
         
    })
    }

    saveToken(token){
        localStorage.setItem(this.TOKEN_KEY,token)
    }


}

