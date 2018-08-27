import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentsService } from '../comments.service';
import { Comment } from '../comments.model';


@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.css'],
  providers: [CommentsService]
})
export class CommentsPageComponent implements OnInit {
  comments: Comment[];
  article1() {
    this.router.navigate(['article1', 1]);
  };

  constructor(private router: Router, private commentsService: CommentsService) { }

  ngOnInit() {
 this.comments = this.commentsService.getComments();



}
}
