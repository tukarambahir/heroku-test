import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  url = 'https://test-heroku-basic-app.herokuapp.com/test'

  constructor(private httpClient: HttpClient) { }
  Test(){
    // return "response from service"
    return this.httpClient.get(this.url);
  }
}
