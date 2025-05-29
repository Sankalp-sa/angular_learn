import { Component, Inject } from '@angular/core';
import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sampleApp';

  constructor (@Inject(localStorageToken) private localStorage: Storage) {
    this.localStorage.setItem('appName', 'Sample Angular App');
    console.log('Local Storage:', this.localStorage);
  }
}
