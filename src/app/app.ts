import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenProduccion } from './models/orden-produccion.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Variable reactiva que Angular actualizará automáticamente si cambia.
  protected readonly title = signal('control-produccion-v1.0');

  // Crear objeto orden de tipo OrdenProduccion
  orden = new OrdenProduccion(1, 'Tornillo Industrial', 300, 500);
  mensaje = '';

  iniciarOrden() {
    try {
      this.orden.iniciar();
      this.mensaje = 'Orden iniciada correctamente.';
    } catch (error: any) {
      this.mensaje = error.message;
    }
  }

  finalizarOrden() {
    try {
      this.orden.finalizar();
      this.mensaje = 'Orden finalizada correctamente.';
    } catch (error: any) {
      this.mensaje = error.message;
    }
  }
}
