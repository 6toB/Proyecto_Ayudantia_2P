import { UpdateTutorshipDto } from "../tutorias/update-tutorship.dato";
import { UpdateTutorDto } from "../tutores/update-tutors.dto";
import { UpdateTutoredDto } from "../tutorados/update-tutored.dto";

export class UpdateStudentDto {

  private constructor(
    public readonly id: number,
    public readonly nombre: string,
    public readonly apellido: string,
    public readonly nivel: string,
    public readonly cedula: string,
    public readonly ayudantia?: UpdateTutorshipDto[],
    public readonly tutor?: UpdateTutorDto[],
    public readonly tutorado?: UpdateTutoredDto[],
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if ( this.id ) returnObj.id = this.id;
    if ( this.nombre ) returnObj.nombre = this.nombre;
    if ( this.apellido ) returnObj.apellido = this.apellido;
    if ( this.nivel ) returnObj.nivel = this.nivel;
    if ( this.cedula ) returnObj.cedula = this.cedula;
    if ( this.ayudantia ) returnObj.ayudantia = this.ayudantia;
    if ( this.tutor ) returnObj.tutor = this.tutor;
    if ( this.tutorado ) returnObj.tutorado = this.tutorado;

    return returnObj;
  }

  static create( props: {[key:string]: any} ): [string?, UpdateStudentDto?]  {

    const { id, nombre, apellido, nivel, cedula, ayudantia, tutor, tutorado  } = props;

    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number'];
    }

    if (!nombre && !apellido && !nivel && !cedula && !ayudantia && !tutor && !tutorado) {
      return ['At least one property must be provided'];
    }
    return [undefined, new UpdateStudentDto(id, nombre, apellido, nivel, cedula, ayudantia, tutor, tutorado)];
  }
}