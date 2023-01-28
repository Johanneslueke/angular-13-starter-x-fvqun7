import { Component, OnInit } from '@angular/core';
import {
  combineLatest,
  distinctUntilChanged,
  map,
  Observable,
  tap,
} from 'rxjs';
import { TestcaseModel } from 'src/app/models/testcase-model';
import { DataRepoService } from 'src/app/services/data-repo.service';
import { UIStateService } from 'src/app/services/uistate.service';

@Component({
  selector: 'app-testcase-page',
  templateUrl: './testcase-page.component.html',
  styleUrls: ['./testcase-page.component.css'],
})
export class TestcasePageComponent implements OnInit {
  private _selectedTestCaseId$!: Observable<string>;
  private _testCases$!: Observable<Array<TestcaseModel>>;

  get TemplateViewModel$() {
    return combineLatest([
      this._selectedTestCaseId$,
      this._testCases$,
      this.uistate.hasFileBeenUploaded$,
    ]).pipe(
      map(([id, cases, fileuploaded]) => ({ id, cases, fileuploaded })),
      distinctUntilChanged((prev, cur) => {
        return (
          prev.fileuploaded === cur.fileuploaded &&
          prev.id === cur.id &&
          Array.isArray(prev.cases) &&
          Array.isArray(cur.cases) &&
          prev.cases.length === cur.cases.length &&
          prev.cases.every((val, index) => val === cur.cases[index])
        );
      }),
      tap(console.log)
    );
  }

  get TestCases$() {
    return this._testCases$;
  }

  get SelectedTestCase() {
    return this.TemplateViewModel$.pipe(
      map(
        ({
          id,
          cases,
          fileuploaded,
        }: {
          id: string;
          cases: Array<TestcaseModel>;
          fileuploaded: boolean;
        }) => cases.find((t) => t.id === id)
      )
    );
  }

  constructor(private data: DataRepoService, public uistate: UIStateService) {}

  ngOnInit(): void {
    this._testCases$ = this.data.Testcases$;
    this._selectedTestCaseId$ = this.uistate.SelectedTestCaseId$.pipe();
  }

  selectTest($event: string): void {
    console.log('Page: ', $event);
    this.uistate.selectTestCase($event);
  }
}
