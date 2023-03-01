import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryService } from '../category.service'
import { Category } from '../model/category'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor(private categoryService: CategoryService) {}

  categories: Category[] = [];
  getCategories(): void {
    this.categories = this.categoryService.getCategories();
  }

  ngOnInit(): void {
    this.getCategories();
  }

  @Input() selectedCategoryFilter: String | undefined | null;
  @Output() newCategoryFilterEvent = new EventEmitter();

  
  handleCategoryFilter(category: String) {
    this.selectedCategoryFilter = category;
    this.newCategoryFilterEvent.emit(category);
    console.log(this.selectedCategoryFilter);
  }


}
