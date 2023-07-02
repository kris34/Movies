import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhattowatchComponent } from './whattowatch.component';

describe('WhattowatchComponent', () => {
  let component: WhattowatchComponent;
  let fixture: ComponentFixture<WhattowatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhattowatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhattowatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
