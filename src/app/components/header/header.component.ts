import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ANCHORS_IN_PAGE, HeaderService } from './header.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatIconModule, MatMenuModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  ANCHORS_IN_PAGE = ANCHORS_IN_PAGE;

  constructor(
    public readonly headerService: HeaderService,
  ) {}

  public scrollToAnchor(anchor: ANCHORS_IN_PAGE) {
    if (anchor) {
      this.headerService.scrollTo$.next(anchor);
    }
  }
}
