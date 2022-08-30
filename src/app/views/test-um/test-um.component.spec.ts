import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUmComponent } from './test-um.component';

describe('TestUmComponent', () => {
  let component: TestUmComponent;
  let fixture: ComponentFixture<TestUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestUmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
