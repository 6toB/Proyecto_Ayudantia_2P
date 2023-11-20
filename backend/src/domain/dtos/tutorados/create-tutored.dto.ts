
export class CreateTutoredDto {

  private constructor(
    public readonly reputacion: string,
    public readonly estudianteId: number,

  ){}

  static create( props: {[key:string]: any} ): [string?, CreateTutoredDto?]  {

    const {reputacion, estudianteId} = props;

    if ( !reputacion ) return ['Reputation property is required', undefined];
    if ( !estudianteId ) return ['EstudianteID property is required', undefined];

    return [undefined, new CreateTutoredDto(reputacion, estudianteId)];
  }
}