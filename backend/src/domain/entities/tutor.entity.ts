import { TutoriaEntity } from "./tutoria.entity";


export class TutorEntity {

    constructor(
      public id: number,
      public especialidad: string,
      public reputacion: string,
      public estudianteId: string,
      public ayudantia?: TutoriaEntity[],
    ) {}

    get Ayudantia() {
      return this.ayudantia;
    }
  
    public static fromObject( object: {[key: string]: any} ): TutorEntity {
      const { id,especialidad, reputacion, estudianteId, ayudantia } = object;
      if ( !id ) throw 'Id is required';
      if ( !especialidad ) throw 'Specialty is required';
      if ( !reputacion ) throw 'reputation is required';
      if ( !estudianteId ) throw 'Student id is required';
      //if ( !ayudantia ) throw 'Tutorship is required';
  
        return new TutorEntity(id, especialidad, reputacion, estudianteId, ayudantia)
    }
  
  }
  
  
  