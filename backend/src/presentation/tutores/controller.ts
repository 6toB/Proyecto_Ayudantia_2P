import { Request, Response } from 'express';
import { prisma } from '../../data/postgresql';
import { CreateTutorDto, UpdateTutorDto } from '../../domain/dtos';


export class TutorController {

  constructor() { }
  public getTutors = async( req: Request, res: Response ) => {
    const tutor = await prisma.tutor.findMany();
    return res.json( tutor );
  };
  public getTutorById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const tutor = await prisma.tutor.findFirst({
      where: { id }
    });
    
    ( tutor )
      ? res.json( tutor )
      : res.status( 404 ).json( { error: `Tutor with id ${ id } not found` } );
  };
  public createTutor = async( req: Request, res: Response ) => {
    
    const [error, createTutorDto] = CreateTutorDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const user = await prisma.tutor.create({
      data: createTutorDto!  
    });

    res.json( user );

  };
  public updateTutor = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateTutorDto] = UpdateTutorDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const tutor = await prisma.tutor.findFirst({
      where: { id }
    });

    if ( !tutor ) return res.status( 404 ).json( { error: `Tutor with id ${ id } not found` } );

    const updatedTutor = await prisma.tutor.update({
      where: { id },
      data: updateTutorDto!.values
    });
  
    res.json( updatedTutor );

  }
  public deleteTutor = async(req:Request, res: Response) => {
    const id = +req.params.id;

    const tutor = await prisma.tutor.findFirst({
      where: { id }
    });

    if ( !tutor ) return res.status(404).json({ error: `Tutor with id ${ id } not found` });

    const deleted = await prisma.tutor.delete({
      where: { id }
    });

    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `User with id ${ id } not found` });
    

  }
}