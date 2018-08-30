import { Component, OnInit } from '@angular/core';
import { Comment } from '../comments.model';
import { CommentsService } from '../comments.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-video2',
  templateUrl: './video2.component.html',
  styleUrls: ['./video2.component.css'],
  providers: [CommentsService]
})


export class Video2Component implements OnInit {

  COMMENTS: FirebaseListObservable<any[]>;

  submitForm(userName: string, userPost: string) {
    let newComment: Comment = new Comment(userName, userPost, 8, this.commentsService.getTime());
    if (userName.length > 0 && userPost.length > 0) {
      this.commentsService.addComment(newComment);
    }
  }

  constructor( private commentsService: CommentsService, private db: AngularFireDatabase) {
    this.COMMENTS = this.db.list('comment', {
      query: {
        orderByChild: 'articleId',
        equalTo: 8,
      }
    });
  }

    ngOnInit() {

    }

}
