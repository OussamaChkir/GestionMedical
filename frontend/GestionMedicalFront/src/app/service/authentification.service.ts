import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

export class User{
  constructor(
public username:string,
public roles:string
  ){}
}
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private httpClient:HttpClient) { }

  authenticate(username, password) {
    return this.httpClient
      .post<any>("http://localhost:8080/authenticate", { username, password })
      .pipe(
        map(userData => {
          sessionStorage.setItem("username", username);
          let tokenStr = "Bearer " + userData.token;
          sessionStorage.setItem("token", tokenStr);
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
  }

 public getUser(){
   return this.httpClient.get<any>("http://localhost:8080/user/"+sessionStorage.getItem("username"))
   .pipe(
     map(data=>{
       sessionStorage.setItem("roles", data.roles);
       return data;
     })
   );
 }
 
 
}
