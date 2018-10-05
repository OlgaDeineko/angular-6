import {AppRoutingModule, routes} from './app-routing.module';
import {Location} from '@angular/common';
import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AppComponent} from './app.component';
import {ChartsModule} from 'ng2-charts';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

describe('AppRoutingModule', () => {
  let appRoutingModule: AppRoutingModule;
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    appRoutingModule = new AppRoutingModule();

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatGridListModule,
        MatInputModule,
        ChartsModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule],
      declarations: [
        DashboardComponent,
        PageNotFoundComponent,
        AppComponent
      ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('should create an instance', () => {
    expect(appRoutingModule).toBeTruthy();
  });

  it('navigate to "" redirects you to /dashboard', () => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/dashboard');
    });
  });

  it('navigate to "dashboard" takes you to /dashboard', () => {
    router.navigate(['dashboard']).then(() => {
      expect(location.path()).toBe('/dashboard');
    });
  });


});
