import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import 'select2';


@Component({
  selector: 'app-tag-component',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})

export class TagComponent {
  @Input() suggestionList: string[] = [];
  @Input() tags: string[] = [];
  @Output() tagsChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  showAddButton: boolean = false; 
  newTag: string = '';
  suggestions: string[] = [];

  tagTypeAhead() {
    this.suggestions = this.getTags(this.newTag.toLowerCase());
  }

  getTags(filter: string): string[] {
    let retSuggestions = this.suggestionList.filter(suggestion => suggestion.toLowerCase().startsWith(filter));
    if (retSuggestions.length == 0) {
      this.showAddButton = true;
    }
    else
    {
      this.showAddButton = false;
    }
    return retSuggestions;
  }

  addTag(newTag: string): void {
    this.newTag = newTag;
    if (this.newTag && !this.tags.includes(this.newTag)) {
      this.tags.push(this.newTag);
      this.tagsChange.emit(this.tags);
      this.newTag = '';
    }
    this.showAddButton = false;
  }

  removeTag(tag: string): void {
    const index = this.tags.indexOf(tag);
    if (index > -1) {
      this.tags.splice(index, 1);
      this.tagsChange.emit(this.tags);
    }
  }
}
