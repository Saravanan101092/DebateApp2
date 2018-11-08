import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedebateComponent } from './createdebate.component';

describe('CreatedebateComponent', () => {
  let component: CreatedebateComponent;
  let fixture: ComponentFixture<CreatedebateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedebateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedebateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
