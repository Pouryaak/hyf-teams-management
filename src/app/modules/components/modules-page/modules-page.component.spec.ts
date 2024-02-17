import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesPageComponent } from './modules-page.component';

describe('ModulesPageComponent', () => {
  let component: ModulesPageComponent;
  let fixture: ComponentFixture<ModulesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModulesPageComponent]
    });
    fixture = TestBed.createComponent(ModulesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
