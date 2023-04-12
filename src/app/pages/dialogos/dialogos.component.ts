import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsuariosDialogosComponent } from './mis-dialogos/usuarios-dialogos/usuarios-dialogos.component';

@Component({
  selector: 'app-dialogos',
  templateUrl: './dialogos.component.html',
  styleUrls: ['./dialogos.component.scss']
})
export class DialogosComponent {

  constructor(
    private dialogService: MatDialog
  ) {}

 abrirDialogosDeUsuarioss(): void{
  const dialogo = this.dialogService.open(UsuariosDialogosComponent, {
    data:{
      usuarios: {
        nombre: 'naruto',
        apellido: 'Uzumaki',
      }
    }
  });

  dialogo.afterClosed()
  .subscribe(console.log)

 }

}
