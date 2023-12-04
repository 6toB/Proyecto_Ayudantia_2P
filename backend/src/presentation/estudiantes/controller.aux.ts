// DDD
import { Request, Response } from 'express';
import { CreateStudentDto, UpdateStudentDto } from '../../domain/dtos';
import { EstudianteRepository } from '../../domain';


export class StudentsController {

  //* DI
  constructor(
    private readonly estudianteRepository: EstudianteRepository,
  ) { }


  public getStudents = async ( req: Request, res: Response ) => {
    const Students = await this.estudianteRepository.getAll();
    return res.json( Students );
  };

  public getStudentById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const student = await this.estudianteRepository.findById( id );
      res.json( student );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createStudent = async ( req: Request, res: Response ) => {
    const [ error, createStudentDto ] = CreateStudentDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const student = await this.estudianteRepository.create( createStudentDto! );
    res.json( student );

  };

  public updateStudent = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateStudentDto ] = UpdateStudentDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedStudent = await this.estudianteRepository.updateById( updateStudentDto! );
    return res.json( updatedStudent );

  };


  public deleteStudent = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedStudent = await this.estudianteRepository.deleteById( id );
    res.json( deletedStudent );

  };



}