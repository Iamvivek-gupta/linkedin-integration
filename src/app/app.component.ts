import { Component } from '@angular/core';
import { S1Service } from './s1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(public ser:S1Service){
}
temp=false;
show(){
  this.temp=true;
}

dtt;
Login(){
alert("hallo")
this.ser.serLogin().subscribe(ft=>{
  this.dtt=ft
  alert(this.dtt.api)
 // window.location.href='http://localhost:3000/auth/linkedin'
})  
  
}
dt;
Get(){
  this.ser.serGet().subscribe(data=>{
    this.dt=data
    alert(this.dt.result)
  })
}
}
