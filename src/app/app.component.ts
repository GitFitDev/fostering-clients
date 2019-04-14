import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { AuthService } from '../app/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: []
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private authService: AuthService
  ) {
    matIconRegistry.addSvgIcon(
      'battle',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/superpower.svg')
    );
    this.authService.getAuthenticatedUser().subscribe(authData => {
      if (authData) {
        this.router.navigate(['/home']);
      }
    });
  }
}
