import { TutoriaEntity } from "./tutoria.entity";


export class TutoradoEntity {

    constructor(
      public id: number,
      public reputacion: string,
      public estudianteId: string,
      public ayudantia?: TutoriaEntity[],
    ) {}

    get Ayudantia() {
      return this.ayudantia;
    }
  
    public static fromObject( object: {[key: string]: any} ): TutoradoEntity {
      const { id, reputacion, estudianteId, ayudantia } = object;
      if ( !id ) throw 'Id is required';
      if ( !reputacion ) throw 'reputation is required';
      if ( !estudianteId ) throw 'Student id is required';
      //if ( !ayudantia ) throw 'Tutorship is required';
  
        return new TutoradoEntity(id, reputacion, estudianteId, ayudantia)
    }
  
  }
  
  
  