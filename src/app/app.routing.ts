import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { MoreNewsComponent } from './more-news/more-news.component';


const appRoutes: Routes = [
{
  path: '',
  component: HomeDisplayComponent
},
{
  path: 'article1',
  component: Article1DisplayComponent,
},
{
  path: 'article2',
  component: Article2DisplayComponent
},
{
  path: 'article3',
  component: Article3DisplayComponent
},
{
  path: 'article4',
  component: Article4DisplayComponent
},
{
  path: 'article5',
  component: Article5DisplayComponent
},
{
  path: 'article6',
  component: Article6DisplayComponent
},
{
  path: 'video1',
  component: Video1Component
},
{
  path: 'video2',
  component: Video2Component
},
{
  path: 'video3',
  component: Video3Component
},
{
  path: 'news',
  component: MoreNewsComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
