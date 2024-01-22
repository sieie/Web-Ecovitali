import { Component } from '@angular/core';

@Component({
  selector: 'app-trabaja-nosotros',
  templateUrl: './trabaja-nosotros.component.html',
  styleUrls: ['./trabaja-nosotros.component.css']
})
export class TrabajaNosotrosComponent {

  //=========== SUBIDA DE DOCS Y OMITE EL INPUT DE BOOSTRAP POR DEFECTO ===========//
  selectedFileName: string = '';

  updateFileName(event: any): void {
    const input = event.target;

    if (input.files && input.files.length > 0) {
      this.selectedFileName = input.files[0].name;
    } else {
      this.selectedFileName = '';
    }
  }

  //=========== Método para manejar la dinámica de colores en el elemento select según la división empresarial===========//
  divisionSeleccionada: string | null = null;

  seleccionarColor(event: Event): void {
    const division = (event.target as HTMLSelectElement).value;
    this.divisionSeleccionada = division === 'default' ? null : this.divisionColor(division);
  }

  divisionColor(division: string): string {
    switch (division) {
      case 'plagas':
        return '#71af32';
      case 'limpieza':
        return '#542f88';
      case 'jardineria':
        return '#ef7912';
      case 'desinfeccion':
        return '#2791cc';
      default:
        return '#a7a7a7';
    }
  }
}
