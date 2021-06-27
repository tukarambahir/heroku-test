import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  urlt = 'https://test-heroku-basic-app.herokuapp.com/test'
  urltng = 'https://localhost:8080/test'

  constructor(private httpClient: HttpClient) { }
  Test(){
    console.log("in test service test")

    // return "response from service"
    return this.httpClient.get(this.urlt);
  }
  Testing(){
    console.log("in test service testing")
    // return "response from service"
    return this.httpClient.get(this.urltng);
  }
}
