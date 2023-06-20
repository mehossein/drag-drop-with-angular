import { Component, Input } from '@angular/core';

@Component({
  selector: 'corp-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @Input() index: number = 0;
}
