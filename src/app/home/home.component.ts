import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private testService:TestService) { }

  ngOnInit(): void {
  }

  test(){
    // this.testService.Test().subscribe(res=>{
    //   console.log(res)
    this.testService.Test().subscribe(res=>{
      console.log("resp "+res)
    })
  }
  testing(){
    this.testService.Testing().subscribe(res=>{
      console.log("resp "+res)
    })
  }


}
