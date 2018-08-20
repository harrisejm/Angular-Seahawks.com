import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {


   headlines = !null;

  roundUp = null;

  showVideo = null;

  showHeadLines(show) {
    this.headlines = show;
    this.roundUp = null;
    this.showVideo = null;
    // document.getElementById("selectHeadlines").style.borderBottom = "solid";
    // let y = document.getElementById("selectRoundUp");
    // y.style.borderBottom = "none";
    // let z = document.getElementById("selectVideos");
    // y.style.borderBottom = "none";
    }

  ShowRoundUp(show) {
    this.roundUp = show;
    this.headlines = null;
    this.showVideo = null;
    }

  ShowVideo(show) {
    this.showVideo = show;
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



  constructor() { }

  ngOnInit() {
  }

}
