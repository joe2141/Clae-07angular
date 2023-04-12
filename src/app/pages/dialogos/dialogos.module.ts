import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogosComponent } from './dialogos.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UsuariosDialogosComponent } from './mis-dialogos/usuarios-dialogos/usuarios-dialogos.component';
import { ComidaDialogosComponent } from './mis-dialogos/comida-dialogos/comida-dialogos.component';




@NgModule({
  declarations: [
    DialogosComponent,
    UsuariosDialogosComponent,
    ComidaDialogosComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    DialogosComponent

  ]
})
export class DialogosModule { }
