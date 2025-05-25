import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageMotoristaComponent } from './homepage-motorista.component';

describe('HomepageMotoristaComponent', () => {
  let component: HomepageMotoristaComponent;
  let fixture: ComponentFixture<HomepageMotoristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageMotoristaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageMotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
