export class UpdateReasonDto {

  private constructor(
    public readonly id: number,
    public readonly tipo: string,
    public readonly descripcion: string,
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if ( this.id ) returnObj.correo = this.id;
    if ( this.tipo ) returnObj.descripcion = this.descripcion;
    if ( this.descripcion ) returnObj.descripcion = this.descripcion;

    return returnObj;
  }

  static create( props: {[key:string]: any} ): [string?, UpdateReasonDto?]  {

    const { id, tipo, descripcion } = props;

    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number'];
    }

    if ( !tipo && !descripcion ) {
      return ['At least one property must be provided'];
    }
    return [undefined, new UpdateReasonDto(id, tipo, descripcion)];
  }


}