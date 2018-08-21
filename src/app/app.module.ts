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
    Article3DisplayComponent
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
