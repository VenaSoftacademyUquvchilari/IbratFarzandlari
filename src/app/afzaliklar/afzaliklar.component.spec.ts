import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfzaliklarComponent } from './afzaliklar.component';

describe('AfzaliklarComponent', () => {
  let component: AfzaliklarComponent;
  let fixture: ComponentFixture<AfzaliklarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfzaliklarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfzaliklarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
