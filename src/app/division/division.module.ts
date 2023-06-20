import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components/dialog/dialog.component';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [DialogComponent, ItemComponent, ListComponent],
  imports: [CommonModule],
  exports: [ListComponent],
})
export class DivisionModule {}
