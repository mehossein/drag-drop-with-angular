import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'corp-parent',
  templateUrl: './parent.component.html',
})
export class ParentComponent {
  list: number[] = [];

  addChildComponent(): void {
    this.list.push(this.list.length + 1);
  }

  drop(event: any) {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }
}
