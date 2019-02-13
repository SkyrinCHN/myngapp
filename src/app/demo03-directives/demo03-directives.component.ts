import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo03-directives',
  templateUrl: './demo03-directives.component.html',
  styleUrls: ['./demo03-directives.component.css']
})
export class Demo03DirectivesComponent implements OnInit {
  list = ['小红', '小明', '小芳', '小李'];
  isMember = true;
  score = 70;
  answer = 'b';
  constructor() { }

  ngOnInit() {
  }

}
