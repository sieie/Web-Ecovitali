import { Component, AfterViewInit, ElementRef, Renderer2, HostListener } from '@angular/core';
declare const bootstrap: any;

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements AfterViewInit {
  private currentPopover: any; // Variable para almacenar la instancia del popover actual

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    // Obtén todos los elementos que tienen el atributo data-bs-toggle="popover"
    const popoverTriggers = this.el.nativeElement.querySelectorAll('[data-bs-toggle="popover"]');

    // Itera sobre cada elemento y añade un event listener para el evento 'shown.bs.popover'
    popoverTriggers.forEach((popoverTrigger: { addEventListener: (arg0: string, arg1: () => void) => void; }) => {
      const popover = new bootstrap.Popover(popoverTrigger);

      popoverTrigger.addEventListener('shown.bs.popover', () => {
        // Cierra el popover actualmente abierto antes de abrir uno nuevo
        if (this.currentPopover && this.currentPopover !== popover) {
          this.currentPopover.hide();
        }

        // Actualiza la referencia al popover actual
        this.currentPopover = popover;
      });
    });
  }

  // Método para manejar clics dentro del componente
  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;

    // Cierra el popover actual si está abierto y el clic no ocurrió en un elemento que lo activa
    if (this.currentPopover && !clickedElement.closest('[data-bs-toggle="popover"]')) {
      this.currentPopover.hide();
      this.currentPopover = null; // Actualiza la referencia al popover actual
    }
  }

  // Método para abrir un popover específico
  openPopover(popoverIndex: number): void {
    // Obtén todos los elementos que tienen el atributo data-bs-toggle="popover"
    const popoverTriggers = this.el.nativeElement.querySelectorAll('[data-bs-toggle="popover"]');

    // Abre el popover específico
    if (popoverTriggers.length > popoverIndex) {
      const specificPopoverTrigger = popoverTriggers[popoverIndex];
      const specificPopover = new bootstrap.Popover(specificPopoverTrigger);
      specificPopover.show();
    }
  }
}
