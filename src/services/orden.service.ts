import { Injectable } from '@angular/core';
import { OrdenProduccion } from '../app/models/orden-produccion.model';

@Injectable({
  providedIn: 'root',
})
export class OrdenService {
  // Crear objeto orden de tipo OrdenProduccion
  private orden = new OrdenProduccion(1, 'Tornillo Industrial', 450, 500, false);

  getOrden(): OrdenProduccion {
    return this.orden;
  }

  iniciarOrden(): void {
    this.orden.iniciar();
  }

  finalizarOrden(): void {
    this.orden.finalizar();
  }
}
