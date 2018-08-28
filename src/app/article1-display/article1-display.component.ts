import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
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
  // articleId: number;
  //commentsDisplay: Comment[];
// albumId: number = null;

  constructor(private route: ActivatedRoute, private location: Location, private commentsService: CommentsService, private db: AngularFireDatabase) {
    //this.COMMENTS = db.list('comment');
    this.COMMENTS = this.db.list('comment', {
        query: {
            orderByChild: 'articleId',
            equalTo: "1",
        }
    });
   }

   // testShow(): void {
   //   this.COMMENTS = this.db.list('comment', {
   //       query: {
   //           orderByChild: 'articleId',
   //           equalTo: 2,
   //       }
   //   });
   // }


    ngOnInit() {
      // this.route.params.forEach((urlParameters) => {
      //   this.articleId = parseInt(urlParameters['id']);
      // });
    }
  commentsDisplay = this.commentsService.getComments();//getCommentsByArticle(2);
}
