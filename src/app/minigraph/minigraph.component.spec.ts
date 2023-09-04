import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinigraphComponent } from './minigraph.component';

describe('MinigraphComponent', () => {
  let component: MinigraphComponent;
  let fixture: ComponentFixture<MinigraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinigraphComponent]
    });
    fixture = TestBed.createComponent(MinigraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
