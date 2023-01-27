import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UIStateService {
  private _selectedTestCaseId$ = new BehaviorSubject<string>('');

  get SelectedTestCaseId$() {
    return this._selectedTestCaseId$.asObservable();
  }

  constructor() {}

  selectTestCase(id: string) {
    this._selectedTestCaseId$.next(id);
  }
}
