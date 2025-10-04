import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderService } from './header.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(
    public readonly headerService: HeaderService,
  ) {}
}
