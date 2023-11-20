export class CreateStudentDto {

  private constructor(
    public readonly nombre: string,
    public readonly apellido: string,
    public readonly nivel: string,
    public readonly cedula: string,
  ){}

  static create( props: {[key:string]: any} ): [string?, CreateStudentDto?]  {

    const {nombre, apellido, nivel, cedula} = props;

    if ( !nombre ) return ['Name property is required', undefined];
    if ( !apellido ) return ['Last Name property is required', undefined];
    if ( !nivel ) return ['Level property is required', undefined];
    if ( !cedula ) return ['DNI property is required', undefined];

    return [undefined, new CreateStudentDto(nombre, apellido, nivel, cedula)];
  }
}