import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestcaseModel } from 'src/app/models/testcase-model';

@Component({
  selector: 'app-testcase-list-item',
  templateUrl: './testcase-list-item.component.html',
  styleUrls: ['./testcase-list-item.component.css'],
})
export class TestcaseListItemComponent implements OnInit {
  @Input() testcase!: TestcaseModel;
  @Output() select = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log('item', this.testcase.id);
    this.select.emit(this.testcase.id);
  }
}
