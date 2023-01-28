import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Subscription } from 'rxjs';
import { TestcaseModel } from '../models/testcase-model';
import { BackendAPIService } from './backend-api.service';

@Injectable({
  providedIn: 'root',
})
export class DataRepoService {
  private _testcases$ = new BehaviorSubject<Array<TestcaseModel>>([]);
  private _testcasesSub!: Subscription;
  private _testcases!: Array<TestcaseModel>;

  get Testcases$() {
    return this._testcases$.asObservable().pipe(
      distinctUntilChanged((prev, cur) => {
        return (
          prev.length === cur.length &&
          prev.every((val, index) => val.id === cur[index].id)
        );
      })
    );
  }

  constructor(private api: BackendAPIService) {
    //this.refresh();
  }

  refresh() {
    this._testcasesSub?.unsubscribe();
    this._testcasesSub = this.Testcases$.subscribe(
      (data) => (this._testcases = data)
    );
    let sub = this.api
      .testcases()
      .subscribe((data) => this._testcases$.next(data));
    this._testcasesSub.add(sub);
  }

  updateTestcase(id: string, changes: Partial<TestcaseModel>): void {
    let sub: Subscription = this.api
      .updateTestcase(id, changes) // write change back to server
      .subscribe({
        next: (response) => {
          // on server response update frontend
          let i = 0; //this._testcases.findIndex(  (case)  =>  case.id === id);

          this._testcases[i] = {
            ...this._testcases[i], // copies old data
            ...changes, // overrides the propteries defined in changes
          };

          this._testcases$.next(this._testcases); //inform everyone about the update
        },
        error: (error) => {
          this._testcases$.next(this._testcases); //informa everyone that nothing changed
        },
        complete: () => sub.unsubscribe(), // finally remove subscription
      });
  }
}
