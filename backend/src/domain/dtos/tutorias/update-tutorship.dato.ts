

export class UpdateTutorshipDto {

    private constructor(
      public readonly id: number,
      public readonly numeroSesiones: number,
      public readonly fechaProgramada: string,
      public readonly estudianteId: number,
      public readonly tutorId: number,
      public readonly tutoradoId: number,
      public readonly motivoAyudantiaId: number,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id ) returnObj.id = this.id;
      if ( this.numeroSesiones ) returnObj.numeroSesiones = this.numeroSesiones;
      if ( this.fechaProgramada ) returnObj.fechaProgramada = this.fechaProgramada;
      if ( this.estudianteId ) returnObj.estudianteId = this.estudianteId;
      if ( this.tutorId ) returnObj.tutorId = this.tutorId;
      if ( this.tutoradoId ) returnObj.tutoradoId = this.tutoradoId;
      if ( this.motivoAyudantiaId ) returnObj.motivoAyudantiaId = this.motivoAyudantiaId;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateTutorshipDto?]  {
  
      const { id, numeroSesiones, fechaProgramada, estudianteId, tutorId, tutoradoId, motivoAyudantiaId } = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !numeroSesiones && !fechaProgramada && !estudianteId && !tutorId && !tutoradoId && !motivoAyudantiaId ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateTutorshipDto(id, numeroSesiones, fechaProgramada, estudianteId, tutorId, tutoradoId, motivoAyudantiaId)];
    }
  
  
  }