import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FeaturedComponent } from './featured/featured.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { FooterComponent } from './footer/footer.component';
import { HomeDisplayComponent } from './home-display/home-display.component';
import { Article1DisplayComponent } from './article1-display/article1-display.component';
import { Article2DisplayComponent } from './article2-display/article2-display.component';
import { Article3DisplayComponent } from './article3-display/article3-display.component';
import { Article4DisplayComponent } from './article4-display/article4-display.component';
import { Article5DisplayComponent } from './article5-display/article5-display.component';
import { Article6DisplayComponent } from './article6-display/article6-display.component';
import { Video1Component } from './video1/video1.component';
import { Video2Component } from './video2/video2.component';
import { Video3Component } from './video3/video3.component';
import { FeaturedVideosComponent } from './featured-videos/featured-videos.component';
import { MoreNewsComponent } from './more-news/more-news.component';



@NgModule({
  declarations: [
    AppComponent,
    FeaturedComponent,
    NavigationBarComponent,
    HeadlinesComponent,
    FooterComponent,
    HomeDisplayComponent,
    Article1DisplayComponent,
    Article2DisplayComponent,
    Article3DisplayComponent,
    Article4DisplayComponent,
    Article5DisplayComponent,
    Article6DisplayComponent,
    Video2Component,
    Video3Component,
    Video1Component,
    FeaturedVideosComponent,
    MoreNewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
