import { Component } from '@angular/core';
import { from } from 'rxjs';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // login(){
  //   this.router.navigate['/welcome'])
  // }

  title = 'myapp';
  no1:number=0
  no2:number=0
  result:number=0;
  name="Deepti"
  add(no1,no2)
  {
    this.no1=+no1
    this.no2=+no2
    this.result=this.no1+this.no2
    console.log(this.result)
  }
  sub(no1,no2)
  {
    this.no1=+no1
    this.no2=+no2
    this.result=this.no1-this.no2
    console.log(this.result)
  }
  divide(no1,no2)
  {
    this.no1=+no1
    this.no2=+no2
    this.result=this.no1/this.no2
    console.log(this.result)
  }
  multiply(no1,no2)
  {
    this.no1=+no1
    this.no2=+no2
    this.result=this.no1*this.no2
    console.log(this.result)
  }
 changeText(val){
   this.name=val;
 }
}
