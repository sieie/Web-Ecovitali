import { Component, Input, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CorreoService } from '../../services/mails/correo.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css'],
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

  constructor(private fb: FormBuilder, private httpService: CorreoService) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', [Validators.required, this.phoneValidator(), Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      comentario: ['', [Validators.required, Validators.minLength(10)]],
    });

    // Oculta la imagen en el breackpoint sm
    this.mostrarImagen = window.innerWidth >= 576;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.httpService.enviarCorreo(this.contactForm.value).subscribe(
        (resp) => {
          console.log('Correo Enviado con Éxito:', resp);
        },
        (error) => {
          console.error('Error al Enviar el correo:', error);
        }
      );
      this.showSuccessAlert();
    }
  }

  //Alert de confirmación del formulario.
  private showSuccessAlert() {
    Swal.fire({
      title: 'Correo Enviado',
      text: 'Gracias por ponerte en contacto! Nos pondremos en contacto contigo a la brevedad posible.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    })
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
    };
  }
}
