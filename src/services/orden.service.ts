import { Injectable } from '@angular/core';
import { OrdenProduccion } from '../app/models/orden-produccion.model';

@Injectable({
  providedIn: 'root',
})
export class OrdenService {
  // Crear objeto orden de tipo OrdenProduccion
  // private orden = new OrdenProduccion(1, 'Tornillo Industrial', 450, 500, false);

  private ordenes: OrdenProduccion[] = [
    new OrdenProduccion(1, 'Tornillo Industrial', 200, 500, false),
    new OrdenProduccion(2, 'Tuerca Industrial', 450, 500, false),
    new OrdenProduccion(3, 'Arandela', 600, 500, false),
    new OrdenProduccion(4, 'Perno', 150, 500, true),
  ];

  getOrdenes(): OrdenProduccion[] {
    return this.ordenes;
  }

  iniciarOrden(orden: OrdenProduccion): void {
    orden.iniciar();
  }

  finalizarOrden(orden: OrdenProduccion): void {
    orden.finalizar();
  }
}
