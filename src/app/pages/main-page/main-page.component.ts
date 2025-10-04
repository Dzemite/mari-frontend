import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-main-page',
  imports: [AboutMeComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {
  
}
