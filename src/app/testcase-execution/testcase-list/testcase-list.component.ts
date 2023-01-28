import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { TestcaseModel } from 'src/app/models/testcase-model';
import { DataRepoService } from 'src/app/services/data-repo.service';
import { UIStateService } from 'src/app/services/uistate.service';

@Component({
  selector: 'app-testcase-list',
  templateUrl: './testcase-list.component.html',
  styleUrls: ['./testcase-list.component.css'],
})
export class TestcaseListComponent implements OnInit {
  @Input() TestCases!: Array<TestcaseModel> | null;
  @Output() select = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  selectTest($event: string): void {
    console.log("List", $event)
    this.select.next($event);
  }
}
