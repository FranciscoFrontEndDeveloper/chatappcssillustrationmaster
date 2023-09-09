import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MychatComponent } from './mychat.component';

describe('MychatComponent', () => {
  let component: MychatComponent;
  let fixture: ComponentFixture<MychatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MychatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MychatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
