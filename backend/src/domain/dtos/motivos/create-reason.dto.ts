export class CreateReasonDto {

  private constructor(
    public readonly tipo: string,
    public readonly descripcion: string,
  ){}

  static create( props: {[key:string]: any} ): [string?, CreateReasonDto?]  {

    const {tipo, descripcion} = props;

    if ( !tipo ) return ['Type property is required', undefined];
    if ( !descripcion ) return ['Description property is required', undefined];

    return [undefined, new CreateReasonDto(tipo, descripcion)];
  }
}