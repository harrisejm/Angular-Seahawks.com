import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDisplayComponent } from './home-display/home-display.component';
import { Article1DisplayComponent } from './article1-display/article1-display.component';
import { Article2DisplayComponent } from './article2-display/article2-display.component';
import { Article3DisplayComponent } from './article3-display/article3-display.component';

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
  path: 'article1/article2',
  component: Article2DisplayComponent,
},
{
  path: 'article2',
  component: Article2DisplayComponent
},
{
  path: 'article3',
  component: Article3DisplayComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
