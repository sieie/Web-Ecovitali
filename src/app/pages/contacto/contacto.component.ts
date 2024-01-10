import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  formularioSeleccionado = '1';

  seleccionarFormulario(formulario: string): void {
    this.formularioSeleccionado = formulario;
  }
}
