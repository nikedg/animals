import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LionService {
  getLions(){
    return ["lion1", "lion2", "lion3"];

  }

  
}
