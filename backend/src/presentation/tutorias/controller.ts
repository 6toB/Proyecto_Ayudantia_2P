import { Request, Response } from 'express';
import { CreateTutorshipDto, UpdateTutorshipDto } from '../../domain/dtos';
import { CreateTutorship, DeleteTutorship, GetTutorship, GetTutorships, TutoriaRepository, UpdateTutorship } from '../../domain';


export class TutorshipsController {

  //* DI
  constructor(
    private readonly tutorshipRepository: TutoriaRepository,
  ) { }


  public getTutorships = ( req: Request, res: Response ) => {

    new GetTutorships( this.tutorshipRepository )
      .execute()
      .then( tutorships => res.json( tutorships ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getTutorshipById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetTutorship( this.tutorshipRepository )
      .execute( id )
      .then( tutorship => res.json( tutorship ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createTutorship = ( req: Request, res: Response ) => {
    const [ error, createTutorshipDto ] = CreateTutorshipDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateTutorship( this.tutorshipRepository )
      .execute( createTutorshipDto! )
      .then( tutorship => res.json( tutorship ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateTutorship = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateTutorshipDto ] = UpdateTutorshipDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateTutorship( this.tutorshipRepository )
      .execute( updateTutorshipDto! )
      .then( tutorship => res.json( tutorship ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteTutorship = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteTutorship( this.tutorshipRepository )
      .execute( id )
      .then( tutorship => res.json( tutorship ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 