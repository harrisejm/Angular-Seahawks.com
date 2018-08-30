import { Component, OnInit } from '@angular/core';
import { Comment } from '../comments.model';
import { CommentsService } from '../comments.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-article5-display',
  templateUrl: './article5-display.component.html',
  styleUrls: ['./article5-display.component.css'],
  providers: [CommentsService]
})

export class Article5DisplayComponent implements OnInit {
  COMMENTS: FirebaseListObservable<any[]>;

  submitForm(userName: string, userPost: string) {
    let newComment: Comment = new Comment(userName, userPost, 5, this.commentsService.getTime());
    if (userName.length > 0 && userPost.length > 0) {
      this.commentsService.addComment(newComment);
    }
  }

  constructor( private commentsService: CommentsService, private db: AngularFireDatabase) {
    this.COMMENTS = this.db.list('comment', {
      query: {
        orderByChild: 'articleId',
        equalTo: 5,
      }
    });
  }

      ngOnInit() {

      }

}
