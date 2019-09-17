import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent implements OnInit {

  ngOnInit() {
    console.warn("hello")
  }

  @Input('expanded') expanded;
  @Input('expandHeight') expandedHeight;
  @Input('product') product = [];

  currentHeight: number = 0;

  constructor() { }

  ngAfterViewInit() {
    console.warn(this.expanded);
    console.warn(this.expandedHeight);
    console.warn(this.product);
  }


}
