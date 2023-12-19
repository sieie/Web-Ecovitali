import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    const contadores = document.querySelectorAll('.fw-bold[data-cantidad-total]');
    if (contadores) {
      const velocidad = 150;

      const animarContadores = () => {
        contadores.forEach(contador => {
          let cantidad_maxima = +(contador.getAttribute('data-cantidad-total') || '0');
          let valor_actual = 0;
          let incremento = cantidad_maxima / velocidad;

          const actualizar_contador = () => {
            if (valor_actual < cantidad_maxima) {
              valor_actual += incremento;
              contador.textContent = Math.ceil(valor_actual).toString();
              setTimeout(actualizar_contador, 4);
            } else {
              contador.textContent = cantidad_maxima.toString();
            }
          };
          actualizar_contador();
        });
      };

      const mostrarContadores = (elementos: IntersectionObserverEntry[]) => {
        elementos.forEach((element) => {
          if (element.isIntersecting) {
            element.target.classList.add('animar');
            element.target.classList.remove('ocultar');
            setTimeout(animarContadores, 150);
          }
        });
      };

      const observer = new IntersectionObserver(mostrarContadores, {
        threshold: 0.75, // 0 - 1
      });

      const elementosHTML = document.querySelectorAll('.fw-bold[data-cantidad-total]');
      elementosHTML.forEach((elementoHTML) => {
        observer.observe(elementoHTML);
      });
    }
  }
}
