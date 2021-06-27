import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  url = '/test'

  constructor(private httpClient: HttpClient) { }
  Test(){
    return "response from service "
    // return this.httpClient.get(this.url);
  }
}
