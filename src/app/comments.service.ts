import { Injectable } from '@angular/core';
import { Comment } from './comments.model';
//import { COMMENTS } from './testComments';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class CommentsService {
  COMMENTS: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.COMMENTS = database.list('comment');
  }

  getComments() {
    console.log(this.COMMENTS);
    return this.COMMENTS;
  }

  // getCommentsByArticle(id: number) {
  //   let userComments: Comment[] = [];
  //
  //   this.COMMENTS.forEach(function(comment){
  //     if (comment.articleId === id) {
  //       userComments.push(comment)
  //     }
  //   });
  //   return userComments;

    // for (let i = 0; i < COMMENTS.length; i++) {
    //   if (COMMENTS[i].articleId === id) {
    //     userComments.push(COMMENTS[i])
    //   }
    // }
    // return userComments;
  //}




}
