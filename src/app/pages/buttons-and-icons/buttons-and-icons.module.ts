import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsAndIconsComponent } from './buttons-and-icons.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';






@NgModule({
  declarations: [
    ButtonsAndIconsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [
    ButtonsAndIconsComponent
  ]
})
export class ButtonsAndIconsModule { }
