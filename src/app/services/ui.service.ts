import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddOrder: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddOrder(): void {
    this.showAddOrder = !this.showAddOrder;
    this.subject.next(this.showAddOrder);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
