import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ANCHORS_IN_PAGE, HeaderService } from '../../components/header/header.service';
import { HobbyComponent } from './hobby/hobby.component';
import { CreativeProjectsComponent } from './creative-projects/creative-projects.component';

@Component({
  selector: 'app-main-page',
  imports: [AboutMeComponent, EducationComponent, ProjectsComponent, SkillsComponent, HobbyComponent, CreativeProjectsComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {
  @ViewChild('about', { read: ElementRef }) about!: ElementRef;
  @ViewChild('skills', { read: ElementRef }) skills!: ElementRef;
  @ViewChild('education', { read: ElementRef }) education!: ElementRef;
  @ViewChild('projects', { read: ElementRef }) projects!: ElementRef;
  @ViewChild('hobby', { read: ElementRef }) hobby!: ElementRef;

  constructor(
    private headerService: HeaderService,
  ) {}

  ngOnInit() {
    this.headerService.scrollTo$.subscribe((element) => {
      switch (element) {
        case ANCHORS_IN_PAGE.about:
          this.scrollToElement(this.about);
          break;
        case ANCHORS_IN_PAGE.skills:
          this.scrollToElement(this.skills);
          break;
        case ANCHORS_IN_PAGE.education:
          this.scrollToElement(this.education);
          break;
        case ANCHORS_IN_PAGE.projects:
          this.scrollToElement(this.projects);
          break;
        case ANCHORS_IN_PAGE.hobby:
          this.scrollToElement(this.hobby);
          break;

        default:
          break;
      }
    });
  }

  scrollToElement(element: ElementRef) {
    if (element) {
      element.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
