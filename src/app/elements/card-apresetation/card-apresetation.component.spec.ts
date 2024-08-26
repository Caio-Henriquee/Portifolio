import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardApresetationComponent } from './card-apresetation.component';

describe('CardApresetationComponent', () => {
  let component: CardApresetationComponent;
  let fixture: ComponentFixture<CardApresetationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardApresetationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardApresetationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
