import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummySideComponent } from './dummy-side.component';

describe('DummySideComponent', () => {
  let component: DummySideComponent;
  let fixture: ComponentFixture<DummySideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummySideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummySideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
