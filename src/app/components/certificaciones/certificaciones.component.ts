import { Component } from '@angular/core';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.css']
})
export class CertificacionesComponent {

  certificaciones = [
    { src: 'ISO.webp', alt: 'Certificación ISO-9001' },
    { src: 'MDA.webp', alt: 'Ministerio del Ambiente' },
    { src: 'AMCA.webp', alt: 'American Mosquito Control Association' },
    { src: 'ARCSA.webp', alt: 'Asociación Ecuatoriana de Control de Plagas' },
    { src: 'MSP.webp', alt: 'Ministerio de Salud Pública' },
    { src: 'NPMA.webp', alt: 'National Pest Management Association' },
    { src: 'AGROCALIDAD.webp', alt: 'Agrocalidad' },
    { src: 'BASC.webp', alt: 'Business Alliance for Secure' }
  ];

  baseUrl = 'assets/img/';
}
