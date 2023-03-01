import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProjectService } from '../project.service'
import { Project } from '../model/project'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private projectService: ProjectService) {}

  projects: Project[] = [];
  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }

  ngOnInit(): void {
    this.getProjects();
  }
  @Input() selectedCategoryFilter: String | undefined | null;
  @Output() newCategoryFilterEvent = new EventEmitter();
  @Input() selectedTagFilter: String | undefined | null;
  @Output() newTagFilterEvent = new EventEmitter();

  handleCategoryFilter(category: String) {
    this.selectedCategoryFilter = category;
    this.newCategoryFilterEvent.emit(category);
    console.log(this.selectedCategoryFilter);
  }

  handleTagFilter(tag: String) {
    this.selectedTagFilter = tag;
    this.newTagFilterEvent.emit(tag);
    console.log(this.selectedTagFilter);
  }

}
