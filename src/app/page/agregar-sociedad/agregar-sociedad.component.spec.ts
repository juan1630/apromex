import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSociedadComponent } from './agregar-sociedad.component';

describe('AgregarSociedadComponent', () => {
  let component: AgregarSociedadComponent;
  let fixture: ComponentFixture<AgregarSociedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarSociedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarSociedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
