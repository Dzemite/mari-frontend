import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-creative-projects',
  imports: [],
  templateUrl: './creative-projects.component.html',
  styleUrl: './creative-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreativeProjectsComponent {
  public goToLink(link: string) {
    if (link) {
      window.open(link, '_blank');
    }
  }
}
