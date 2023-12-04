

export class TutoriaEntity {

  constructor(
    public id: number,
    public numeroSesiones: string,
    public fechaCreacion: string,
    public fechaProgramada: string,
    public estudianteId: string,
    public tutorId: string,
    public tutoradoId: string,
    public motivoAyudantiaId: string,
  ) {}

  public static fromObject( object: {[key: string]: any} ): TutoriaEntity {
    const { id, numeroSesiones, fechaCreacion, fechaProgramada, estudianteId, tutorId, tutoradoId, motivoAyudantiaId } = object;
    if ( !id ) throw 'Id is required';
    if ( !numeroSesiones ) throw 'Numbers of Sesions are required';
    if ( !fechaCreacion ) throw 'Date1 is required';
    if ( !fechaProgramada ) throw 'Date2 is required';
    if ( !estudianteId ) throw 'id student is required';
    if ( !tutorId ) throw 'id tutor is required';
    if ( !tutoradoId ) throw 'id tutored is required';
    if ( !motivoAyudantiaId ) throw 'id reason is required';

      return new TutoriaEntity(id, numeroSesiones,fechaCreacion,fechaProgramada,estudianteId,tutorId,tutoradoId,motivoAyudantiaId)
  }

}


