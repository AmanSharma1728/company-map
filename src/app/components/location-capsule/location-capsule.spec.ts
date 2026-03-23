import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationCapsule } from './location-capsule';

describe('LocationCapsule', () => {
  let component: LocationCapsule;
  let fixture: ComponentFixture<LocationCapsule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationCapsule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationCapsule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
