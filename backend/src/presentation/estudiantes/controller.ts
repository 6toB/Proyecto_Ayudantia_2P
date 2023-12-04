import { Request, Response } from 'express';
import { CreateStudentDto, UpdateStudentDto } from '../../domain/dtos';
import { CreateStudent, DeleteStudent, GetStudent, GetStudents, EstudianteRepository, UpdateStudent } from '../../domain';


export class StudentsController {

  //* DI
  constructor(
    private readonly estudianteRepository: EstudianteRepository,
  ) { }


  public getStudents = ( req: Request, res: Response ) => {

    new GetStudents( this.estudianteRepository )
      .execute()
      .then( students => res.json( students ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getStudentById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetStudent( this.estudianteRepository )
      .execute( id )
      .then( student => res.json( student ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createStudent = ( req: Request, res: Response ) => {
    const [ error, createStudentDto ] = CreateStudentDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateStudent( this.estudianteRepository )
      .execute( createStudentDto! )
      .then( student => res.json( student ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateStudent = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateStudentDto ] = UpdateStudentDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateStudent( this.estudianteRepository )
      .execute( updateStudentDto! )
      .then( student => res.json( student ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteStudent = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteStudent( this.estudianteRepository )
      .execute( id )
      .then( student => res.json( student ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 