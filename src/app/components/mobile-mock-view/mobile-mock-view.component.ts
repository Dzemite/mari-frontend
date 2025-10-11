import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mobile-mock-view',
  imports: [],
  templateUrl: './mobile-mock-view.component.html',
  styleUrl: './mobile-mock-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileMockViewComponent { }
