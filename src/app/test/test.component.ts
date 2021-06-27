import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private testService:TestService) { }

  ngOnInit(): void {
  }

  test(){
    // this.testService.Test().subscribe(res=>{
    //   console.log(res)
    console.log(this.testService.Test())
    

  }
}
