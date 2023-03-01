import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TagService } from '../tag.service'
import { Tag } from '../model/tag'

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  constructor(private tagService: TagService) {}

  tags: Tag[] = [];
  getTags(): void {
    this.tags = this.tagService.getTags();
  }

  ngOnInit(): void {
    this.getTags();
  }

  @Input() selectedTagFilter: String | undefined | null;
  @Output() newTagFilterEvent = new EventEmitter();


  handleTagFilter(tag: String) {
    this.selectedTagFilter = tag;
    this.newTagFilterEvent.emit(tag);
    console.log(this.selectedTagFilter);
  }

}
