import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  learnMore = false;

  constructor() { }

  ngOnInit(): void {

  }



  learnMoreToggle(){
    this.learnMore=!this.learnMore;
  }


  registerToggle() {
    this.registerMode = !this.registerMode;
    this.learnMore= false;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

}
