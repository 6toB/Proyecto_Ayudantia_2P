import { UpdateTutorshipDto } from "../tutorias/update-tutorship.dato";

export class UpdateTutorDto {

  private constructor(
    public readonly id: number,
    public readonly especialidad: string,
    public readonly reputacion: string,
    public readonly estudianteId: number,
    public readonly ayudantia?: UpdateTutorshipDto[],
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if ( this.id ) returnObj.correo = this.id;
    if ( this.especialidad ) returnObj.especialidad = this.especialidad;
    if ( this.reputacion ) returnObj.reputacion = this.reputacion;
    if ( this.estudianteId ) returnObj.estudianteId = this.estudianteId;
    if ( this.ayudantia ) returnObj.ayudantia = this.ayudantia;

    return returnObj;
  }

  static create( props: {[key:string]: any} ): [string?, UpdateTutorDto?]  {

    const { id, especialidad, reputacion, estudianteId, ayudantia} = props;

    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number'];
    }

    if ( !especialidad && !reputacion && !estudianteId && !ayudantia) {
      return ['At least one property must be provided'];
    }
    return [undefined, new UpdateTutorDto(id, especialidad, reputacion, estudianteId, ayudantia)];
  }
}