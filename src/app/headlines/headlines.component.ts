import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentsService } from '../comments.service';
import { Comment } from '../comments.model';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css'],
  providers: [CommentsService]
})
export class HeadlinesComponent implements OnInit {
  comments: Comment[];


  headlines = "show";
  roundUp = null;
  showVideo = null;

  showHeadLines() {
    this.headlines = "show";
    this.roundUp = null;
    this.showVideo = null;
  }

  ShowRoundUp() {
    this.roundUp = "show";
    this.headlines = null;
    this.showVideo = null;
  }

  ShowVideo() {
    this.showVideo = "show";
    this.headlines = null;
    this.roundUp = null;
  }

  //   hideShow() {
  //     let x = document.getElementById(this.potionId);
  //     if (x.style.display === "none") {
  //         x.style.display = "block";
  //     } else {
  //         x.style.display = "none";
  //     }
  // }


  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
 this.comments = this.commentsService.getComments();

  }

}
