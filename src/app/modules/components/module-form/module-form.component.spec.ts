import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFormComponent } from './module-form.component';

describe('ModuleFormComponent', () => {
  let component: ModuleFormComponent;
  let fixture: ComponentFixture<ModuleFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleFormComponent]
    });
    fixture = TestBed.createComponent(ModuleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
