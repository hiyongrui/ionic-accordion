import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  items: any = new Array(10);
  // itemExpanded: boolean = true;
  itemExpandedHeight: number = 200;
  //https://www.youtube.com/watch?v=0-goeHxBc8c
  listOfChildren = ["First", "Second", "Third"];

  selectedList = [];

  constructor() {
    this.items = [
      {expanded: false},
      {expanded: true},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},
    ]
  }

  expandItem(item) {
    this.selectedList = this.listOfChildren;
    item.expanded = !item.expanded;
    console.warn("this selected list", this.selectedList);
  }

}
