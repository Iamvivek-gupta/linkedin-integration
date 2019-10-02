import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor(public ht:HttpClient) { }

  serLogin(){
    return this.ht.get("http://localhost:3000/auth/linkedin")
  }
  serGet(){
    return this.ht.get("http://localhost:3000/met")
  }
}
