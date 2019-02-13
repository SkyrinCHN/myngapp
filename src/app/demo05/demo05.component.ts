import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo05',
  templateUrl: './demo05.component.html',
  styleUrls: ['./demo05.component.css']
})
export class Demo05Component implements OnInit {
  myUrl = 'http://www.google.com';
  uName = '小明';
  color = 'red';
  constructor() { }

  ngOnInit() {
  }
  handleClick() {
    alert('You win');
  }
  inputChange() {
    console.log(this.uName.trim());
  }

}
