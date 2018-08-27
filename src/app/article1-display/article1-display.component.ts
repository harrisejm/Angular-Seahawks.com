import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Comment } from '../comments.model';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-article1-display',
  templateUrl: './article1-display.component.html',
  styleUrls: ['./article1-display.component.css'],
  providers: [CommentsService]
})

export class Article1DisplayComponent implements OnInit {
  // articleId: number;
  commentsDisplay: Comment[];
// albumId: number = null;

  constructor(private route: ActivatedRoute, private location: Location, private commentsService: CommentsService) { }

    ngOnInit() {
      // this.route.params.forEach((urlParameters) => {
      //   this.articleId = parseInt(urlParameters['id']);
      // });
    }
  commentsDisplay = this.commentsService.getCommentsByArticle(2);
}
