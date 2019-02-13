import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo04-test',
  templateUrl: './demo04-test.component.html',
  styleUrls: ['./demo04-test.component.css']
})
export class Demo04TestComponent implements OnInit {
  Students = [{ id: 1,name:'小明',score:90,sex:'男' },{ id: 2,name:'小红',score:85,sex:'女' },{ id: 3,name:'小芳',score:88,sex:'女' },{ id: 4,name:'小涛',score:55,sex:'男' },{ id: 5,name:'小亮',score:58,sex:'男' }];
  constructor() { }

  ngOnInit() {
  }

}
