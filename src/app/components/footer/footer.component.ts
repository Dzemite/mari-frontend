import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { ANCHORS_IN_PAGE, HeaderService } from '../header/header.service';

@Component({
  selector: 'app-footer',
  imports: [MarkdownModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  // protected readonly title = signal('footer component');
  text = `
Я заинтересована \n
в возможности присоединиться к вашей \n
команде и готова внести вклад в развитие \n
ваших проектов
`;

  ANCHORS_IN_PAGE = ANCHORS_IN_PAGE;
  
  constructor(
    public readonly headerService: HeaderService,
  ) {}

  public scrollToAnchor(anchor: ANCHORS_IN_PAGE) {
    if (anchor) {
      this.headerService.scrollTo$.next(anchor);
    }
  }

  public scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
