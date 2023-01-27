import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TestcaseModel } from '../models/testcase-model';
import { CRUDServiceService } from './crudservice.service';

@Injectable({
  providedIn: 'root',
})
export class BackendAPIService {
  constructor(private crud: CRUDServiceService) {}

  testcaseDataAvailable(): Observable<boolean> {
    return this.crud.read<boolean>('api/testcases/available');
  }

  testcases() {
    return this.crud.read<Array<TestcaseModel>>('api/testcases');
  }

  testcase(id: string) {
    return this.crud.read<TestcaseModel>(`api/testcases/${id}`);
  }

  removeTestcase(id: string) {
    return this.crud.delete<TestcaseModel>(`api/testcases/${id}`);
  }

  updateTestcase(id: string, change: Partial<TestcaseModel>) {
    return this.crud.update<TestcaseModel>(`api/testcases/${id}`, change);
  }

  updateAllTestcases(testcases: Array<Partial<TestcaseModel>>) {
    return this.crud.update<Array<TestcaseModel>>('api/testcases', testcases);
  }
}
