import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoopageComponent } from './foopage.component';

describe('FoopageComponent', () => {
  let component: FoopageComponent;
  let fixture: ComponentFixture<FoopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoopageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
