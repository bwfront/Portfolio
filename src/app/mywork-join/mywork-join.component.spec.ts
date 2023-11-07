import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyworkJoinComponent } from './mywork-join.component';

describe('MyworkJoinComponent', () => {
  let component: MyworkJoinComponent;
  let fixture: ComponentFixture<MyworkJoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyworkJoinComponent]
    });
    fixture = TestBed.createComponent(MyworkJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
