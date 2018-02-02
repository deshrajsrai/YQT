import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContantComponentComponent } from './contant-component.component';

describe('ContantComponentComponent', () => {
  let component: ContantComponentComponent;
  let fixture: ComponentFixture<ContantComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContantComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContantComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
