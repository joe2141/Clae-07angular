import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DasboardComponent } from './dasboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CardsModule } from '../pages/cards/cards.module';
import { ButtonsAndIconsModule } from '../pages/buttons-and-icons/buttons-and-icons.module';
import { FormulariosModule } from '../pages/formularios/formularios.module';
import { DialogosModule } from '../pages/dialogos/dialogos.module';
import { TablasModule } from '../pages/tablas/tablas.module';




@NgModule({
  declarations: [
    DasboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CardsModule,
    ButtonsAndIconsModule,
    FormulariosModule,
    DialogosModule,
    TablasModule
  ],
  exports: [
    DasboardComponent
  ]
})
export class DasboardModule { }
