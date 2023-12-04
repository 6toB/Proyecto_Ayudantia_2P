import { TutorEntity } from "./tutor.entity";
import { TutoradoEntity } from "./tutorado.entity";
import { TutoriaEntity } from "./tutoria.entity";

export class EstudianteEntity {

    constructor(
      public id: number,
      public nombre: string,
      public apellido: String,
      public nivel: String,
      public cedula: String,
      public tutor?: TutorEntity[],
      public tutorado?: TutoradoEntity[],
      public ayudantia?: TutoriaEntity[],
    ) {}

    get Tutor() {
      return this.tutor;
    }

    get Tutorado() {
      return this.tutorado;
    }

    get Ayudantia() {
      return this.ayudantia;
    }
  
    public static fromObject( object: {[key: string]: any} ): EstudianteEntity {
      const { id, nombre, apellido, nivel, cedula, tutor, tutorado, ayudantia } = object;
      if ( !id ) throw 'Id is required';
      if ( !nombre ) throw 'nombre is required';
      if ( !apellido ) throw 'apellido is required';
      if ( !nivel ) throw 'nivel is required';
      if ( !cedula ) throw 'cedula is required';
      //if ( !tutor ) throw 'tutor is required';
      //if ( !tutorado ) throw 'tutorado is required';
      //if ( !ayudantia ) throw 'ayudantias is required';
  
        return new EstudianteEntity(id, nombre, apellido, nivel, cedula, tutor, tutorado, ayudantia)
    }
  
  }