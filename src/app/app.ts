import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileMockViewComponent } from './components/mobile-mock-view/mobile-mock-view.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MobileMockViewComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  public isMobile = false;

  constructor() {
    this.isMobile = this.isMobileDevice();
  }

  isMobileDevice(): boolean {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
  }
}
