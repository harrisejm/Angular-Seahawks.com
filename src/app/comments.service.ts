import { Injectable } from '@angular/core';
import { Comment } from './comments.model';
import { COMMENTS } from './testComments';

@Injectable()
export class CommentsService {

  constructor() { }

  getAlbums() {
    return COMMENTS;
  }


}
