import { Component, OnInit } from '@angular/core';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-video3',
  templateUrl: './video3.component.html',
  styleUrls: ['./video3.component.css']
})
export class Video3Component implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private router: Router) { }

  setScrollTop() {
    if (isPlatformBrowser(this.platformId)) {        this.router.events.subscribe((event: NavigationEnd) => {
        window.scroll(0, 0);
        });
      }
    }

    ngOnInit() {
      this.setScrollTop();
    }

}
