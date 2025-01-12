import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSummaryComponent } from './skills-summary.component';

describe('SkillsSummaryComponent', () => {
  let component: SkillsSummaryComponent;
  let fixture: ComponentFixture<SkillsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
