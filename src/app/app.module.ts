import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FeaturedComponent } from './featured/featured.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FeaturedComponent,
    NavigationBarComponent,
    HeadlinesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
