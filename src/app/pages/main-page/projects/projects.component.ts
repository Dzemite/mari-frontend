import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

export enum PROJECT_TYPES {
  ALL = 0,
  CRM = 1,
  WEB_DESIGN = 2,
  MOBILE_APP = 3,
}

export interface Project {
    type: PROJECT_TYPES;
    title: string;
    subtitle: string;
    tags: string[];
    imageUrl: string;
    link: {
        text: string;
        url: string | null;
    };
    wip: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, MatDividerModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  PROJECT_TYPES = PROJECT_TYPES;

  public selectedFilter = PROJECT_TYPES.ALL;

  public filters = [
    {
      id: PROJECT_TYPES.ALL,
      title: 'all',
      count: 0
    },
    {
      id: PROJECT_TYPES.CRM,
      title: 'crm',
      count: 0
    },
    {
      id: PROJECT_TYPES.WEB_DESIGN,
      title: 'web design',
      count: 0
    },
    {
      id: PROJECT_TYPES.MOBILE_APP,
      title: 'mobile app',
      count: 0
    },
  ];

  public projects: Project[] = [
    {
      type: PROJECT_TYPES.CRM,
      title: 'HIGHWAY',
      subtitle: '',
      tags: ['2025', 'CRM', 'B2B'],
      imageUrl: '/assets/images/highway-crm.png',
      link: {
        text: 'Кейс на Behance',
        url: 'https://www.behance.net/gallery/236043157/Highway-CRM-SaaS-UXUI',
      },
      wip: false
    },
    {
      type: PROJECT_TYPES.WEB_DESIGN,
      title: 'Медлайф',
      subtitle: 'Сайт верстается',
      tags: ['2025', 'WEB-Design', 'B2C', 'Коммерческий'],
      imageUrl: '/assets/images/medlife.png',
      link: {
        text: 'Кейс на Behance',
        url: 'https://www.behance.net/gallery/236324923/Medical-senter-medlajf',
      },
      wip: false
    },
    {
      type: PROJECT_TYPES.MOBILE_APP,
      title: 'Avia Life',
      subtitle: '',
      tags: ['2025', 'Mobile IOS', 'MVP'],
      imageUrl: '/assets/images/avia-life.png',
      link: {
        text: 'In progress',
        url: null,
      },
      wip: true
    },
  ];

  private get _crmProjects() {
    return this.projects.filter(p => p.type === PROJECT_TYPES.CRM);
  }
  private get _webDesignProjects() {
    return this.projects.filter(p => p.type === PROJECT_TYPES.WEB_DESIGN);
  }
  private get _mobileAppProjects() {
    return this.projects.filter(p => p.type === PROJECT_TYPES.MOBILE_APP);
  }
  public crmProjects: Project[] = []; 
  public webDesignProjects: Project[] = []; 
  public mobileAppProjects: Project[] = []; 

  ngOnInit() {
    this.crmProjects = this._crmProjects;
    this.webDesignProjects = this._webDesignProjects;
    this.mobileAppProjects = this._mobileAppProjects;

    const filter = this.filters.find(f => f.id === PROJECT_TYPES.ALL);
    if (filter) {
      filter.count = this.projects.length;
    }

    this.projects.forEach((project) => {
      const filter = this.filters.find(f => f.id === project.type);
      filter && filter.count++;
    });
  }

  changeFilter(filter: PROJECT_TYPES) {
    if (this.selectedFilter !== filter) {
      this.selectedFilter = filter;
    }
  }
}
