import { Injectable } from '@angular/core';
import { BehaviorSubject, mergeMap } from 'rxjs';
import { BackendAPIService } from './backend-api.service';

@Injectable({
  providedIn: 'root',
})
export class UIStateService {
  private _selectedTestCaseId$ = new BehaviorSubject<string>('');
  private _fileuploaded$ = new BehaviorSubject<boolean>(false);

  constructor(private api: BackendAPIService) {}

  get SelectedTestCaseId$() {
    return this._selectedTestCaseId$.asObservable();
  }

  get hasFileBeenUploaded$() {
    return this.api.storageFileUploaded().pipe(
      mergeMap((response) => {
        this._fileuploaded$.next(response);
        return this._fileuploaded$.asObservable();
      })
    );
  }

  selectTestCase(id: string) {
    this._selectedTestCaseId$.next(id);
  }

  fileUpload() {
    this._fileuploaded$.next(true);
  }
}
