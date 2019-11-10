import { Component, OnInit } from '@angular/core';
import { LionService } from '../lion.service';

@Component({
  selector: 'lion',
  templateUrl: './lion.component.html',
  styleUrls: ['./lion.component.css']
})
export class LionComponent implements OnInit {
  lions;



  constructor(service: LionService) {
    this.lions = service.getLions;
   }

  ngOnInit() {
  }

}
