import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Comment } from '../comments.model';

@Component({
  selector: 'app-article1-display',
  templateUrl: './article1-display.component.html',
  styleUrls: ['./article1-display.component.css']
})

export class Article1DisplayComponent implements OnInit {

// albumId: number = null;


  constructor() { }




    ngOnInit() {
      // this.route.params.forEach((urlParameters) => {
      //   this.articleId = parseInt(urlParameters['id']);
      // });
    }

}
