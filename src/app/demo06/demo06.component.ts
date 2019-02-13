import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo06',
  templateUrl: './demo06.component.html',
  styleUrls: ['./demo06.component.css']
})
export class Demo06Component implements OnInit {
  stu = { age: 10, score: 80, name: 'godie' };
  constructor() { }

  ngOnInit() {
  }

}
