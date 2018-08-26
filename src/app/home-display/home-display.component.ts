import { Component, OnInit } from '@angular/core';
import { Comment } from '../comments.model';


@Component({
  selector: 'app-home-display',
  templateUrl: './home-display.component.html',
  styleUrls: ['./home-display.component.css']
})
export class HomeDisplayComponent implements OnInit {

  constructor() { }

 comments: Comment[];



  ngOnInit() {
  }

}
