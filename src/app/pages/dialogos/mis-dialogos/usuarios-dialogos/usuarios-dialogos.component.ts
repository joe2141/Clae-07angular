import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


interface DialogData {
  usuario:{
    nombre: string;
    apellido: string;
  }
}


@Component({
  selector: 'app-usuarios-dialogos',
  templateUrl: './usuarios-dialogos.component.html',
  styleUrls: ['./usuarios-dialogos.component.scss']
})
export class UsuariosDialogosComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) {

  }
}
