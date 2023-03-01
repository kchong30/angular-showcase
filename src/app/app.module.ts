import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectFilterPipe } from './project-filter.pipe';
import { ProjectsComponent } from './projects/projects.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';

@NgModule({
  declarations: [AppComponent, ProjectFilterPipe, ProjectsComponent, CategoriesComponent, TagsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}