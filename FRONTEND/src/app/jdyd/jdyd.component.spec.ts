import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdydComponent } from './jdyd.component';

describe('JdydComponent', () => {
  let component: JdydComponent;
  let fixture: ComponentFixture<JdydComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JdydComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JdydComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
