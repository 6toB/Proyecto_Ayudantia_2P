export class UpdateTutoredDto {

  private constructor(
    public readonly id: number,
    public readonly reputacion: string,
    public readonly estudianteId: number,
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if ( this.id ) returnObj.correo = this.id;
    if ( this.reputacion ) returnObj.reputacion = this.reputacion;
    if ( this.estudianteId ) returnObj.estudianteId = this.estudianteId;

    return returnObj;
  }

  static create( props: {[key:string]: any} ): [string?, UpdateTutoredDto?]  {

    const { id, reputacion, estudianteId} = props;

    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number'];
    }

    if ( !reputacion && !estudianteId) {
      return ['At least one property must be provided'];
    }
    return [undefined, new UpdateTutoredDto(id, reputacion, estudianteId)];
  }
}