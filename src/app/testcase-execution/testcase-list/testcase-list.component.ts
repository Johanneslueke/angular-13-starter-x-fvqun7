import { Component, OnInit } from '@angular/core';
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
  private _selectedTestCaseId$!: Observable<string>;
  private _testCases$!: Observable<Array<TestcaseModel>>;

  get TestCases$() {
    return this._testCases$;
  }

  get SelectedTestCase() {
    return combineLatest([this._selectedTestCaseId$, this._testCases$]).pipe(
      map(([id, cases]) => cases.find((t) => t.id === id))
    );
  }

  constructor(private data: DataRepoService, private uistate: UIStateService) {}

  ngOnInit(): void {
    this._testCases$ = this.data.Testcases$;
    this._selectedTestCaseId$ = this.uistate.SelectedTestCaseId$;
  }

  selectTest($event: string): void {
    this.uistate.selectTestCase($event);
  }
}
