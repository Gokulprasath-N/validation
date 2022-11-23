import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'validation';

  public text!:string 
  public number!:number
  country!:string;
  states!:string[];
  public myDate!:Date


  onState(){
    if(this.country=="India")
    {
      this.states=['Arunachal Pradesh','Assam','Bihar','Chhattisgarh'];
      
    }
    else if(this.country=="UsStates")
    {
      this.states=['Alabama','Alaska','Arizona','Arkansas'];
    }
    else if(this.country=="UkStates")
    {
      this.states=['England','Northern Ireland','Scotland','Wales'];
    }
  }

  constructor() { 
    setInterval(() =>{
    this.myDate=new Date},100)
  }

 

}
     



