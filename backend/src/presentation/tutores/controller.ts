import { Request, Response } from 'express';
import { CreateTutorDto, UpdateTutorDto } from '../../domain/dtos';
import { CreateTutor, DeleteTutor, GetTutor, GetTutors, TutorRepository, UpdateTutor } from '../../domain';


export class TutorsController {

  //* DI
  constructor(
    private readonly tutorRepository: TutorRepository,
  ) { }


  public getTutors = ( req: Request, res: Response ) => {

    new GetTutors( this.tutorRepository )
      .execute()
      .then( tutors => res.json( tutors ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getTutorById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetTutor( this.tutorRepository )
      .execute( id )
      .then( tutor => res.json( tutor ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createTutor = ( req: Request, res: Response ) => {
    const [ error, createTutorDto ] = CreateTutorDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateTutor( this.tutorRepository )
      .execute( createTutorDto! )
      .then( tutor => res.json( tutor ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateTutor = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateTutorDto ] = UpdateTutorDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateTutor( this.tutorRepository )
      .execute( updateTutorDto! )
      .then( tutor => res.json( tutor ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteTutor = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteTutor( this.tutorRepository )
      .execute( id )
      .then( tutor => res.json( tutor ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 