import { Component } from '@angular/core';
import { CATEGORIES } from './data/categories';
import { PROJECTS } from './data/projects';
import { TAGS } from './data/tags';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Kevin Chong - Show Me What you Got';
  date: number = new Date().getFullYear();
  author = 'Kevin Chong'

  selectedCategoryFilter: String | undefined | null;
  selectedTagFilter: String | undefined | null;

  handleCategoryFilter(category: String) {
    this.selectedCategoryFilter = category;
    console.log(this.selectedCategoryFilter);
  }

  handleTagFilter(tag: String) {
    this.selectedTagFilter = tag;
    console.log(this.selectedTagFilter);
  }
  
  removeCategoryFilter(){
    this.selectedCategoryFilter = undefined;
    console.log(this.selectedCategoryFilter);
  }

  removeTagFilter(){
    this.selectedTagFilter = undefined;
    console.log(this.selectedCategoryFilter);
  }
}
