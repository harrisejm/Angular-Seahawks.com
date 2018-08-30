import { Component, OnInit } from '@angular/core';
import { Comment } from '../comments.model';
import { CommentsService } from '../comments.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-article1-display',
  templateUrl: './article1-display.component.html',
  styleUrls: ['./article1-display.component.css'],
  providers: [CommentsService]
})

export class Article1DisplayComponent implements OnInit {
  COMMENTS: FirebaseListObservable<any[]>;

  submitForm(userName: string, userPost: string) {
    let newComment: Comment = new Comment(userName, userPost, 1, this.commentsService.getTime());
    if (userName.length > 0 && userPost.length > 0) {
      this.commentsService.addComment(newComment);
    }
  }

  constructor( private commentsService: CommentsService, private db: AngularFireDatabase) {
    this.COMMENTS = this.db.list('comment', {
      query: {
        orderByChild: 'articleId',
        equalTo: 1,
      }
    });
  }

  ngOnInit() {

  }
  // commentsDisplay = this.commentsService.getComments();//getCommentsByArticle(2);
}
