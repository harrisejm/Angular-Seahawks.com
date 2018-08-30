import { Component, OnInit } from '@angular/core';
import { Comment } from '../comments.model';
import { CommentsService } from '../comments.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-video6',
  templateUrl: './video6.component.html',
  styleUrls: ['./video6.component.css'],
  providers: [CommentsService]
})
export class Video6Component implements OnInit {


    COMMENTS: FirebaseListObservable<any[]>;

    submitForm(userName: string, userPost: string) {
      let newComment: Comment = new Comment(userName, userPost, 12, this.commentsService.getTime());
      if (userName.length > 0 && userPost.length > 0) {
        this.commentsService.addComment(newComment);
      }
    }

    constructor( private commentsService: CommentsService, private db: AngularFireDatabase) {
      this.COMMENTS = this.db.list('comment', {
        query: {
          orderByChild: 'articleId',
          equalTo: 12,
        }
      });
    }

  ngOnInit() {
  }

}
