import { Request, Response } from 'express';
import { prisma } from '../../data/postgresql';
import { CreateTutoredDto, UpdateTutoredDto } from '../../domain/dtos';


export class TutoredController {
  
  constructor() { }
  public getTutoreds = async( req: Request, res: Response ) => {
    const tutoreds = await prisma.tutorado.findMany();
    return res.json( tutoreds );
  };
  public getTutoredById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const tutored = await prisma.tutorado.findFirst({
      where: { id }
    });
    
    ( tutored )
      ? res.json( tutored )
      : res.status( 404 ).json( { error: `Tutored with id ${ id } not found` } );
  };
  /*
  public createTutored = async( req: Request, res: Response ) => {
    const {estudianteId, reputacion} = req.body;
  
    const estudiante = await prisma.estudiante.findFirst({
      where: { id: estudianteId }
    });
  
    if (!estudiante) {
      return res.status(404).json({ error: `Estudiante with id ${estudianteId} not found` });
    }
  
    const [error, createTutoredDto] = CreateTutoredDto.create({estudianteId, reputacion});
    
    if ( error ) return res.status(400).json({ error });
  
    const tutored = await prisma.tutorado.create({
      data: createTutoredDto!
    });
  
    res.json( tutored );
  };
  */
  public createTutored = async( req: Request, res: Response ) => {
    
    const [error, createTutoredDto] = CreateTutoredDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const tutored = await prisma.tutorado.create({
      data: createTutoredDto!
    });

    res.json( tutored );

  };

  public updateTutored = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateTutoredDto] = UpdateTutoredDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const tutored = await prisma.tutorado.findFirst({
      where: { id }
    });

    if ( !tutored ) return res.status( 404 ).json( { error: `Tutored with id ${ id } not found` } );

    const updatedTutored = await prisma.tutorado.update({
      where: { id },
      data: updateTutoredDto!.values
    });
  
    res.json( updatedTutored );

  }
  public deleteTutored = async(req:Request, res: Response) => {
    const id = +req.params.id;

    const tutored = await prisma.tutorado.findFirst({
      where: { id }
    });

    if ( !tutored ) return res.status(404).json({ error: `Tutored with id ${ id } not found` });

    const deleted = await prisma.tutorado.delete({
      where: { id }
    });

    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Tutored with id ${ id } not found` });
    

  }
}