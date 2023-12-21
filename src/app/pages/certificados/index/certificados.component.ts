import { Component } from '@angular/core';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent {

  certificaciones = [
    { src: 'ISO.webp', alt: 'Certificación ISO-9001' },
    { src: 'BASC.webp', alt: 'Business Alliance for Secure' },
    { src: 'MSP.webp', alt: 'Ministerio de Salud Pública' },
    { src: 'ARCSA.webp', alt: 'Asociación Ecuatoriana de Control de Plagas' },
    { src: 'NPMA.webp', alt: 'National Pest Management Association' },
    { src: 'AMCA.webp', alt: 'American Mosquito Control Association' },
    { src: 'MDA.webp', alt: 'Ministerio del Ambiente' },
    { src: 'AGROCALIDAD.webp', alt: 'Agrocalidad' },
  ];

  baseUrl = 'assets/img/';


}
