import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAyudaComponent } from './panel-ayuda.component';

describe('PanelAyudaComponent', () => {
  let component: PanelAyudaComponent;
  let fixture: ComponentFixture<PanelAyudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelAyudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
