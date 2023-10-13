import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto-plagas',
  templateUrl: './contacto-plagas.component.html',
  styleUrls: ['./contacto-plagas.component.css']
})
export class ContactoPlagasComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      nombre: [null, Validators.required],
      telefono: [null],
      email: [null, [Validators.required, Validators.email]],
      comentario: [null, [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Aquí puedes enviar el formulario a través de un servicio o realizar otras acciones
      console.log('Formulario válido:', this.contactForm.value);
    }
  }
}
