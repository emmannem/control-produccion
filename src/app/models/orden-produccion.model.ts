export type EstadoOrden = 'pendiente' | 'en_proceso' | 'finalizada';

export class OrdenProduccion {
  constructor(
    public id: number,
    public producto: string,
    public cantidad: number,
    public capacidadMaquina: number,
    public estado: EstadoOrden = 'pendiente',
  ) {}

  // Reglas

  puedeIniciar(): boolean {
    return this.cantidad <= this.capacidadMaquina;
  }

  iniciar(): void {
    if (!this.puedeIniciar()) {
      throw new Error('La cantidad excede la capacidad de la máquina.');
    }
    this.estado = 'en_proceso';
  }

  finalizar(): void {
    if (this.estado !== 'en_proceso') {
      throw new Error('La orden debe estar en proceso para finalizar.');
    }
    this.estado = 'finalizada';
  }
}
