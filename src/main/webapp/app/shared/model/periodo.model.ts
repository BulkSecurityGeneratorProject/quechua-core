export const enum Cuatrimestre {
  PRIMERO = 'PRIMERO',
  SEGUNDO = 'SEGUNDO',
  VERANO = 'VERANO'
}

export interface IPeriodo {
  id?: number;
  cuatrimestre?: Cuatrimestre;
  anio?: string;
}

export const defaultValue: Readonly<IPeriodo> = {};
