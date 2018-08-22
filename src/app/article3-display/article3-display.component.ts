import { Component, OnInit } from '@angular/core';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-article3-display',
  templateUrl: './article3-display.component.html',
  styleUrls: ['./article3-display.component.css']
})
@Injectable()
export class Article3DisplayComponent implements OnInit {

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