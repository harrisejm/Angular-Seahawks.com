import { Component, OnInit } from '@angular/core';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-video2',
  templateUrl: './video2.component.html',
  styleUrls: ['./video2.component.css']
})
export class Video2Component implements OnInit {

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
