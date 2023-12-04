import { UpdateTutorshipDto } from "../tutorias/update-tutorship.dato";

export class UpdateTutoredDto {

  private constructor(
    public readonly id: number,
    public readonly reputacion: string,
    public readonly estudianteId: number,
    public readonly ayudantia?: UpdateTutorshipDto[],

  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if ( this.id ) returnObj.correo = this.id;
    if ( this.reputacion ) returnObj.reputacion = this.reputacion;
    if ( this.estudianteId ) returnObj.estudianteId = this.estudianteId;
    if ( this.ayudantia ) returnObj.ayudantia = this.ayudantia;


    return returnObj;
  }

  static create( props: {[key:string]: any} ): [string?, UpdateTutoredDto?]  {

    const { id, reputacion, estudianteId, ayudantia} = props;

    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number'];
    }

    if ( !reputacion && !estudianteId && !ayudantia) {
      return ['At least one property must be provided'];
    }
    return [undefined, new UpdateTutoredDto(id, reputacion, estudianteId, ayudantia)];
  }
}