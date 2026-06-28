import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(username:string,password:string):boolean{
    return username==='admin' && password==='Admin@123';
  }

  logout():void{
    localStorage.removeItem('token');
  }

  saveToken(token:string):void{
    localStorage.setItem('token',token);
  }

  getToken():string|null{
    return localStorage.getItem('token');
  }

  isLoggedIn():boolean{
    return !!this.getToken();
  }

}