import { Injectable } from '@angular/core';
import { Comment } from './comments.model';
import { COMMENTS } from './testComments';

@Injectable()
export class CommentsService {

  constructor() { }

  getComments() {
    return COMMENTS;
  }

  getCommentsByArticle(id: number) {
    let userComments: Comment[] = [];
    for (let i = 0; i < COMMENTS.length; i++) {
      if (COMMENTS[i].articleId === id) {
        userComments.push(COMMENTS[i])
      }
    }
    return userComments;
  }




}
