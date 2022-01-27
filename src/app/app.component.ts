import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Screen1Component } from './Screens/screen1/screen1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';

  constructor(private routter:Router)
  {
    this.screen1();
  }
    screen1(){
      this.routter.navigate(["screen1"]);
    }
    screen2(){
      this.routter.navigate(["screen2"]);
    }
    screen3(){
      this.routter.navigate(["screen3"]);
    }
}
