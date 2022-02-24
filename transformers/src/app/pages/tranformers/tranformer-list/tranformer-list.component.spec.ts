import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranformerListComponent } from './tranformer-list.component';

describe('TranformerListComponent', () => {
  let component: TranformerListComponent;
  let fixture: ComponentFixture<TranformerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranformerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranformerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
