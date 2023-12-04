import { CreateTutorshipDto } from "../tutorias/create-tutorship.dato";


export class CreateReasonDto {

  private constructor(
    public readonly tipo: string,
    public readonly descripcion: string,
    public readonly ayudantia?: CreateTutorshipDto[],
  ){}

  static create( props: {[key:string]: any} ): [string?, CreateReasonDto?]  {

    const {tipo, descripcion, ayudantia} = props;

    if ( !tipo ) return ['Type property is required', undefined];
    if ( !descripcion ) return ['Description property is required', undefined];

    return [undefined, new CreateReasonDto(tipo, descripcion, ayudantia)];
  }
}