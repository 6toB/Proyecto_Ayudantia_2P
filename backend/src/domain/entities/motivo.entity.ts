import { TutoriaEntity } from "./tutoria.entity";

export class MotivoEntity {

    constructor(
      public id: number,
      public tipo: string,
      public descripcion: string,
      public ayudantia?: TutoriaEntity[],
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): MotivoEntity {
      const { id, tipo, descripcion, ayudantia } = object;
      if ( !id ) throw 'Id is required';
      if ( !tipo ) throw 'tipo is required';
      if ( !descripcion ) throw 'descripcion is required';
      //if ( !ayudantia ) throw 'ayudantia is required';
  
        return new MotivoEntity(id, tipo, descripcion, ayudantia)
    }
  
  }
  
  
  