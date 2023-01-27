import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputHarness } from '@angular/material/input/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('App component', () => {
  let loader: HarnessLoader;
  let fixture: ComponentFixture<AppComponent>;

  TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [
      NoopAnimationsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
    ],
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should set negative value on form control', async () => {
    const input = await loader.getHarness(MatInputHarness);
    await input.setValue('-3');
    const harnessValue = await input.getValue();
    const controlValue = fixture.componentInstance.form.get('control')?.value;
    expect(controlValue).toEqual(-3);
    expect(+harnessValue).toEqual(controlValue);
  });
});
