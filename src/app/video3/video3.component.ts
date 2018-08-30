import { Component, OnInit } from '@angular/core';
import { Comment } from '../comments.model';
import { CommentsService } from '../comments.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-video3',
  templateUrl: './video3.component.html',
  styleUrls: ['./video3.component.css'],
  providers: [CommentsService]
})
export class Video3Component implements OnInit {

  COMMENTS: FirebaseListObservable<any[]>;

  submitForm(userName: string, userPost: string) {
    let newComment: Comment = new Comment(userName, userPost, 9, this.commentsService.getTime());
    if (userName.length > 0 && userPost.length > 0) {
      this.commentsService.addComment(newComment);
    }
  }

  constructor( private commentsService: CommentsService, private db: AngularFireDatabase) {
    this.COMMENTS = this.db.list('comment', {
      query: {
        orderByChild: 'articleId',
        equalTo: 9,
      }
    });
  }

    ngOnInit() {

    }

}
