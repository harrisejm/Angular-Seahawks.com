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
    document.getElementById("headlineLink1").style.borderBottom = "solid";
    document.getElementById("headlineLink2").style.borderBottom = null;
    document.getElementById("headlineLink3").style.borderBottom = null;
  }

  ShowRoundUp() {
    this.roundUp = "show";
    this.headlines = null;
    this.showVideo = null;
    document.getElementById("headlineLink1").classList.remove("hightLight");
    document.getElementById("headlineLink1").style.borderBottom = null;
    document.getElementById("headlineLink2").style.borderBottom = "solid";
    document.getElementById("headlineLink3").style.borderBottom = null;
  }

  ShowVideo() {
    this.showVideo = "show";
    this.headlines = null;
    this.roundUp = null;
    document.getElementById("headlineLink1").classList.remove("hightLight");
    document.getElementById("headlineLink1").style.borderBottom = null;
    document.getElementById("headlineLink2").style.borderBottom = null;
    document.getElementById("headlineLink3").style.borderBottom = "solid";
  }

  article1() {
    this.router.navigate(['article1', 1]);
  };

  constructor(private router: Router, private commentsService: CommentsService) { }

  ngOnInit() {
 //this.comments = this.commentsService.getComments();

  }

}
