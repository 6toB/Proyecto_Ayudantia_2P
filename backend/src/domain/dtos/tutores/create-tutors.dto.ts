export class CreateTutorDto {

  private constructor(
    public readonly especialidad: string,
    public readonly reputacion: string,
    public readonly estudianteId: number,
  ){}

  static create( props: {[key:string]: any} ): [string?, CreateTutorDto?]  {

    const {especialidad, reputacion, estudianteId} = props;

    if ( !especialidad ) return ['Specialty property is required', undefined];
    if ( !reputacion ) return ['Reputation property is required', undefined];
    if ( !estudianteId ) return ['EstudianteId property is required', undefined];

    return [undefined, new CreateTutorDto(especialidad, reputacion, estudianteId)];
  }   
}