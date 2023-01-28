import { Injectable } from '@angular/core';
import { BehaviorSubject, mergeAll, mergeMap } from 'rxjs';
import { BackendAPIService } from './backend-api.service';
import { DataRepoService } from './data-repo.service';

@Injectable({
  providedIn: 'root',
})
export class UIStateService {
  private _selectedTestCaseId$ = new BehaviorSubject<string>('');
  private _fileuploaded$ = new BehaviorSubject<boolean>(false);

  constructor(private api: BackendAPIService, private repo: DataRepoService) {}

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
    console.log('fileUpload');
    this._fileuploaded$.next(true);
    this.selectTestCase('');
    this.repo.refresh();
  }
}
