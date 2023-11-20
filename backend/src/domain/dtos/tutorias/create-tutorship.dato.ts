export class CreateTutorshipDto {

    private constructor(
      public readonly numeroSesiones: number,
      public readonly fechaProgramada: string,
      public readonly estudianteId: number,
      public readonly tutorId: number,
      public readonly tutoradoId: number,
      public readonly motivoAyudantiaId: number,
    ){}
  
    static create( props: {[key:string]: any} ): [string?, CreateTutorshipDto?]  {
  
      const { numeroSesiones, fechaProgramada,estudianteId, tutorId, tutoradoId, motivoAyudantiaId} = props;
  
      if ( !numeroSesiones ) return ['Sesion Number property is required', undefined];
      if ( !fechaProgramada ) return ['Programed Date is required', undefined];
      if ( !estudianteId ) return ['EstudianteId property is required', undefined];
      if ( !tutorId ) return ['TutorId property is required', undefined];
      if ( !motivoAyudantiaId ) return ['MotivoId property is required', undefined];
  
      return [undefined, new CreateTutorshipDto(numeroSesiones, fechaProgramada, estudianteId, tutorId, tutoradoId, motivoAyudantiaId)];
    }
  
  
  }