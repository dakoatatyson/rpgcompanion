import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistorPage } from './registor.page';

describe('RegistorPage', () => {
  let component: RegistorPage;
  let fixture: ComponentFixture<RegistorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
