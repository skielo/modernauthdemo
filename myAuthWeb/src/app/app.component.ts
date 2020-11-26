import { Component } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myAuthWeb';
  constructor(private adalSvc: MsAdalAngular6Service) {
    this.adalSvc.acquireToken('https://graph.microsoft.com').subscribe((token: string) => {
      localStorage.setItem(`${environment.name}_token`, `Bearer ${token}`);
    });
  }

  logOut(): void {
    this.adalSvc.logout();
    localStorage.clear();
  }
}
