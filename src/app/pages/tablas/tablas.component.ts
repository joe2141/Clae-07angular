import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface Estudiante {
  id: number;
  nombre:string;
  apellido: string;
  fecha_registro: Date;

}

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent {


  estudiantes: Estudiante[] = [
    {
      id:1,
      nombre: 'Kilian',
      apellido: 'Diez',
      fecha_registro: new Date()
    },
    {
      id: 2,
      nombre: 'Elia',
      apellido: 'Paz',
      fecha_registro: new Date()
    },
    {
      id: 3,
      nombre: 'Edurne',
      apellido: 'Carballo',
      fecha_registro: new Date()
    },
  ];

  dataSource = new MatTableDataSource(this.estudiantes);

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'fecha_registro']

  aplicarFiltros(ev: Event): void {
    const inputValue = (ev.target as HTMLInputElement )?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();

  }

}
