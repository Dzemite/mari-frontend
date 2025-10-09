import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export enum ANCHORS_IN_PAGE {
  about = 'about',
  skills = 'skills',
  education = 'education',
  projects = 'projects',
  hobby = 'hobby',
}

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public headerColor$ = new BehaviorSubject('#000000');
  public headerFull$ = new BehaviorSubject(true);
  public scrollTo$ = new Subject<ANCHORS_IN_PAGE>();
}
