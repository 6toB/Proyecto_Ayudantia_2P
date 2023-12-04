import { CreateTutorshipDto } from "../tutorias/create-tutorship.dato";

export class CreateTutoredDto {

  private constructor(
    public readonly reputacion: string,
    public readonly estudianteId: number,
    public readonly ayudantia?: CreateTutorshipDto[],

  ){}

  static create( props: {[key:string]: any} ): [string?, CreateTutoredDto?]  {

    const {reputacion, estudianteId, ayudantia} = props;

    if ( !reputacion ) return ['Reputation property is required', undefined];
    if ( !estudianteId ) return ['EstudianteID property is required', undefined];
    //if ( !ayudantia ) return ['Ayudantia property is required', undefined];

    return [undefined, new CreateTutoredDto(reputacion, estudianteId, ayudantia)];
  }
}