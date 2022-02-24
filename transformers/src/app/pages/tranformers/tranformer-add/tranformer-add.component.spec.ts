import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranformerAddComponent } from './tranformer-add.component';

describe('TranformerAddComponent', () => {
  let component: TranformerAddComponent;
  let fixture: ComponentFixture<TranformerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranformerAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranformerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
