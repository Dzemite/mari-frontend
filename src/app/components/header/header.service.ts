import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public headerColor$ = new BehaviorSubject('#000000');
  public headerFull$ = new BehaviorSubject(true);
}
