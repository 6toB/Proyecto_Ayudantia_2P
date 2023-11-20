import { Request, Response } from 'express';
import { prisma } from '../../data/postgresql';
import { CreateStudentDto, UpdateStudentDto} from '../../domain/dtos';


export class StudentController {
  
  constructor() { }
  public getStudent = async( req: Request, res: Response ) => {
    const student = await prisma.estudiante.findMany();
    return res.json( student );
  };
  public getStudentById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const student = await prisma.estudiante.findFirst({
      where: { id }
    });
    
    ( student )
      ? res.json( student )
      : res.status( 404 ).json( { error: `Student with id ${ id } not found` } );
  };

  public createStudent = async( req: Request, res: Response ) => {
    
    const [error, createStudentDto] = CreateStudentDto.create(req.body);  
    if ( error ) return res.status(400).json({ error });

    const student = await prisma.estudiante.create({
      data: createStudentDto!
    });

    res.json( student );

  };

  public updateStudent = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateStudentDto] = UpdateStudentDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const student = await prisma.estudiante.findFirst({
      where: { id }
    });

    if ( !student ) return res.status( 404 ).json( { error: `Student with id ${ id } not found` } );

    const updatedStudent = await prisma.estudiante.update({
      where: { id },
      data: updateStudentDto!.values
    });
  
    res.json( updatedStudent );

  }
  public deleteStudent = async(req:Request, res: Response) => {
    const id = +req.params.id;

    const student = await prisma.estudiante.findFirst({
      where: { id }
    });

    if ( !student ) return res.status(404).json({ error: `Student with id ${ id } not found` });

    const deleted = await prisma.estudiante.delete({
      where: { id }
    });

    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Student with id ${ id } not found` });
    
  }
}