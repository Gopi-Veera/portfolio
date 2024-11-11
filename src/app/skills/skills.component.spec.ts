import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkllsComponent } from './skills.component';

describe('SkllsComponent', () => {
  let component: SkllsComponent;
  let fixture: ComponentFixture<SkllsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkllsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkllsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
