export class UpdateStudentDto {

  private constructor(
    public readonly id: number,
    public readonly nombre: string,
    public readonly apellido: string,
    public readonly nivel: string,
    public readonly cedula: string,
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if ( this.id ) returnObj.id = this.id;
    if ( this.nombre ) returnObj.nombre = this.nombre;
    if ( this.apellido ) returnObj.apellido = this.apellido;
    if ( this.nivel ) returnObj.nivel = this.nivel;
    if ( this.cedula ) returnObj.cedula = this.cedula;

    return returnObj;
  }

  static create( props: {[key:string]: any} ): [string?, UpdateStudentDto?]  {

    const { id, nombre, apellido, nivel, cedula } = props;

    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number'];
    }

    if (!nombre && !apellido && !nivel && !cedula) {
      return ['At least one property must be provided'];
    }
    return [undefined, new UpdateStudentDto(id, nombre, apellido, nivel, cedula)];
  }
}