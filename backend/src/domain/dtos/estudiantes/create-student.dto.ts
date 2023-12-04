import { CreateTutorshipDto } from "../tutorias/create-tutorship.dato";
import { CreateTutorDto } from "../tutores/create-tutors.dto";
import { CreateTutoredDto } from "../tutorados/create-tutored.dto";

export class CreateStudentDto {

  private constructor(
    public readonly nombre: string,
    public readonly apellido: string,
    public readonly nivel: string,
    public readonly cedula: string,
    public readonly ayudantia?: CreateTutorshipDto[],
    public readonly tutor?: CreateTutorDto[],
    public readonly tutorado?: CreateTutoredDto[],
  ){}

  static create( props: {[key:string]: any} ): [string?, CreateStudentDto?]  {

    const {nombre, apellido, nivel, cedula, ayudantia, tutor, tutorado} = props;

    if ( !nombre ) return ['Name property is required', undefined];
    if ( !apellido ) return ['Last Name property is required', undefined];
    if ( !nivel ) return ['Level property is required', undefined];
    if ( !cedula ) return ['DNI property is required', undefined];

    return [undefined, new CreateStudentDto(nombre, apellido, nivel, cedula, ayudantia, tutor, tutorado)];
  }
}