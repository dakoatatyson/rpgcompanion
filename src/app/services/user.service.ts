import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: any = null;

  constructor(private http: HttpClient) { 

  }

  registor(user){
    this.http.post('http://192.168.1.2:8080/api/users/', user)
      .subscribe(
        data => {
  
        },
        error => {
          console.log("something happened");
        }
      );
  }

  login(email, password){
    console.log(email + " " + password)
    const httpOptions = {
      params: new HttpParams()
        .set('email', email)
        .set("password", password)
    }
    this.http.get('http://192.168.1.2:8080/api/users/', httpOptions).subscribe(
      data => {
        this.user = data[0];
        console.log(data[0])
      },
      error => {
        console.log(error);
      }
    )
  }
}
