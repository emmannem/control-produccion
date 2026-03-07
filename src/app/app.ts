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
  // protected readonly title = signal('control-produccion-v1.0');

  ordenes: OrdenProduccion[] = [];
  nuevaCantidad = 0;

  constructor(private ordenService: OrdenService) {
    this.ordenes = this.ordenService.getOrdenes();
  }

  iniciar(orden: OrdenProduccion) {
    orden.mensaje = '';
    try {
      this.ordenService.iniciarOrden(orden);
      orden.mensaje = 'Orden iniciada correctamente';
    } catch (error: any) {
      orden.mensaje = error.message;
    }
  }

  finalizar(orden: OrdenProduccion) {
    orden.mensaje = '';
    try {
      this.ordenService.finalizarOrden(orden);
      orden.mensaje = 'Orden finalizada correctamente';
    } catch (error: any) {
      orden.mensaje = error.message;
    }
  }

  /* actualizarCantidad() {
    this.orden.cantidad = this.nuevaCantidad;
  } */

  /*  
 
 // No es necesario el metodo Angular actualiza 
 // automáticamente el modelo cuando el usuario 
 // cambia el valor del input con two-way binding
 
 actualizarCantidad(orden: OrdenProduccion) {
    orden.cantidad = this.nuevaCantidad;
  } */
}
