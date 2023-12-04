import { Request, Response } from 'express';
import { CreateReasonDto, UpdateReasonDto } from '../../domain/dtos';
import { CreateReason, DeleteReason, GetReason, GetReasons, MotivoRepository, UpdateReason } from '../../domain';


export class ReasonsController {

  //* DI
  constructor(
    private readonly motivoRepository: MotivoRepository,
  ) { }


  public getReasons = ( req: Request, res: Response ) => {

    new GetReasons( this.motivoRepository )
      .execute()
      .then( reasons => res.json( reasons ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getReasonById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetReason( this.motivoRepository )
      .execute( id )
      .then( reason => res.json( reason ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createReason = ( req: Request, res: Response ) => {
    const [ error, createReasonDto ] = CreateReasonDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateReason( this.motivoRepository )
      .execute( createReasonDto! )
      .then( reason => res.json( reason ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateReason = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateReasonDto ] = UpdateReasonDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateReason( this.motivoRepository )
      .execute( updateReasonDto! )
      .then( reason => res.json( reason ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteReason = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteReason( this.motivoRepository )
      .execute( id )
      .then( reason => res.json( reason ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 