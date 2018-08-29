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
////recentPostsRef = firebase.database().ref('articleId').equalTo(2);

addComment(newComment: Comment) {
  this.COMMENTS.push(newComment);
}

  getComments() {
    console.log(this.COMMENTS);
    return this.COMMENTS;
  //  return database.ref('articleId').equalTo(2);
  }
  // getCommentsByArticle(id: number) {
  //   let userComments: Comment[] = [];
  //
  //   this.COMMENTS.forEach(function(comment){
  //     if (this.comment.articleId === id) {
  //       userComments.push(this.comment)
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
