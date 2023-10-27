import { Component, Input, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent {
  @Input() imagenContacto = 'assets/img/website/contacto-plagas.png';
  @Input() botonColor: string | undefined;

  // Maneja cambios en el tamaño de la ventana para actualizar mostrarImagen
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.mostrarImagen = window.innerWidth >= 992; // Cambia 992 según tus necesidades
  }

  mostrarImagen = true;
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      nombre: [null, Validators.required],
      telefono: [null, [Validators.required, this.phoneValidator(), Validators.minLength(10)]], // Aquí aplicamos el validador personalizado
      email: [null, [Validators.required, Validators.email]],
      comentario: [null, [Validators.required, Validators.minLength(10)]]
    });

    // Oculta la imagen en el breackpoint sm
    this.mostrarImagen = window.innerWidth >= 576;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulario válido:', this.contactForm.value);
    }
  }

  phoneValidator() {
    return (control: { value: any }) => {
      const phoneNumber = control.value;
      const regex = /^[0-9]*$/; // Esto permite solo números enteros

      if (phoneNumber && !regex.test(phoneNumber)) {
        return { phone: true }; // Devuelve un objeto con el nombre de la validación personalizada
      }

      if (phoneNumber && phoneNumber.length > 10) {
        return { maxLength: true }; // Devuelve un objeto con el nombre de la validación personalizada
      }

      return null;
    }
  };
}
