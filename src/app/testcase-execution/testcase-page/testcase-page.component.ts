import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable, tap } from 'rxjs';
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
    return combineLatest([this._selectedTestCaseId$, this._testCases$]).pipe(
      map(([id, cases]) => ({ id, cases }))
    );
  }

  get TestCases$() {
    return this._testCases$;
  }

  get SelectedTestCase() {
    return this.TemplateViewModel$.pipe(
      map(({ id, cases }) => cases.find((t) => t.id === id))
    );
  }

  constructor(private data: DataRepoService, private uistate: UIStateService) {}

  ngOnInit(): void {
    this._testCases$ = this.data.Testcases$;
    this._selectedTestCaseId$ = this.uistate.SelectedTestCaseId$.pipe();
  }

  selectTest($event: string): void {
    console.log('Page: ', $event);
    this.uistate.selectTestCase($event);
  }
}
