import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInventoryInstanceModalComponent } from './create-inventory-instance-modal.component';

describe('CreateInventoryInstanceModalComponent', () => {
  let component: CreateInventoryInstanceModalComponent;
  let fixture: ComponentFixture<CreateInventoryInstanceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInventoryInstanceModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInventoryInstanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
