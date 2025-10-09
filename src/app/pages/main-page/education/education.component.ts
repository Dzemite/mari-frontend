import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-education',
  imports: [CommonModule, MatDividerModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  public elements = [
    {
      title: 'Диплом',
      items: [
        {
          title: '2022 — 2023',
          subtitle: 'AHO ДПО Образовательные технологии Яндекса',
          description: 'Международный Диплом о переподготовке, Дизайнер интерфейсов',
        },
        {
          title: '2012 — 2017',
          subtitle: 'КузГТУ имени Т. Ф. Горбачева',
          description: 'Диплом, высшее, Экономическая безопасность',
        },
      ]
    },
    {
      title: 'Курсы',
      items: [
        {
          title: '2025',
          subtitle: 'UXROCK',
          description: 'Мобильные приложения. Продакт дизайнер & UX‑исследователь',
        },
        {
          title: '2023 — 2024',
          subtitle: 'UPROCK',
          description: 'UX/UI Дизайнер с нуля до МИДЛ +',
        },
      ]
    },
  ]
}
