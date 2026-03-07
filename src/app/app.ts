import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdenService } from '../services/orden.service';
import { OrdenProduccion } from './models/orden-produccion.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Variable reactiva que Angular actualizará automáticamente si cambia.
  protected readonly title = signal('control-produccion-v1.0');

  orden: OrdenProduccion;
  mensaje = '';
  nuevaCantidad = 0;

  constructor(private ordenService: OrdenService) {
    this.orden = this.ordenService.getOrden();
  }

  iniciar() {
    try {
      this.ordenService.iniciarOrden();
      this.mensaje = 'Orden iniciada correctamente';
    } catch (error: any) {
      this.mensaje = error.message;
    }
  }

  finalizar() {
    try {
      this.ordenService.finalizarOrden();
      this.mensaje = 'Orden finalizada correctamente';
    } catch (error: any) {
      this.mensaje = error.message;
    }
  }

  actualizarCantidad() {
    this.orden.cantidad = this.nuevaCantidad;
  }
}
