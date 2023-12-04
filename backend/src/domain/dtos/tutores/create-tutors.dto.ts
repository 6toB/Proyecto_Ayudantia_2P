import { CreateTutorshipDto } from "../tutorias/create-tutorship.dato";

export class CreateTutorDto {

  private constructor(
    public readonly especialidad: string,
    public readonly reputacion: string,
    public readonly estudianteId: number,
    public readonly ayudantia?: CreateTutorshipDto[],

  ){}

  static create( props: {[key:string]: any} ): [string?, CreateTutorDto?]  {

    const {especialidad, reputacion, estudianteId, ayudantia} = props;

    if ( !especialidad ) return ['Specialty property is required', undefined];
    if ( !reputacion ) return ['Reputation property is required', undefined];
    if ( !estudianteId ) return ['EstudianteId property is required', undefined];
    //if ( !ayudantia ) return ['Ayudantia property is required', undefined];

    return [undefined, new CreateTutorDto(especialidad, reputacion, estudianteId, ayudantia)];
  }   
}