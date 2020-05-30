import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaAdminComponent } from './zona-admin.component';

describe('ZonaAdminComponent', () => {
  let component: ZonaAdminComponent;
  let fixture: ComponentFixture<ZonaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
