import { Location } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/core/auth';
import { RouteComponentBaseDirective } from '../../shared/core';
import { APP_CONFIG } from '@main-project/app-config/';

@Component({
  selector: 'boiler-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends RouteComponentBaseDirective {
  constructor(
    override readonly route: ActivatedRoute,
    override readonly location: Location,
    private readonly authService: AuthService,
    @Inject(APP_CONFIG) override readonly appConfig: any
  ) {
    super(route, location, appConfig);
  }

  loginViaGoogle() {
    this.authService.loginViaGoogle();
  }
}
