import { Request, Response } from 'express';
import { CreateTutoredDto, UpdateTutoredDto } from '../../domain/dtos';
import { CreateTutored, DeleteTutored, GetTutored, GetTutoreds, TutoradoRepository, UpdateTutored } from '../../domain';


export class TutoredsController {

  //* DI
  constructor(
    private readonly tutoredRepository: TutoradoRepository,
  ) { }


  public getTutoreds = ( req: Request, res: Response ) => {

    new GetTutoreds( this.tutoredRepository )
      .execute()
      .then( tutoreds => res.json( tutoreds ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getTutoredById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetTutored( this.tutoredRepository )
      .execute( id )
      .then( tutored => res.json( tutored ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createTutored = ( req: Request, res: Response ) => {
    const [ error, createTutoredDto ] = CreateTutoredDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateTutored( this.tutoredRepository )
      .execute( createTutoredDto! )
      .then( tutored => res.json( tutored ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateTutored = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateTutoredDto ] = UpdateTutoredDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateTutored( this.tutoredRepository )
      .execute( updateTutoredDto! )
      .then( tutored => res.json( tutored ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteTutored = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteTutored( this.tutoredRepository )
      .execute( id )
      .then( tutored => res.json( tutored ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 