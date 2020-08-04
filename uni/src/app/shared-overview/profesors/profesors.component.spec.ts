import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorsComponent } from './profesors.component';
import { AuthService } from 'src/app/core/auth/auth.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

describe('ProfesorsComponent', () => {
  let component: ProfesorsComponent;
  let fixture: ComponentFixture<ProfesorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorsComponent ],
      providers: [AuthService, HttpClient, HttpHandler, AngularFirestore ],
      imports: [RouterTestingModule, AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        AngularFireDatabaseModule,
        AngularFirestoreModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
