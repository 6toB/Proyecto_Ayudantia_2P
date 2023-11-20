import { Request, Response } from 'express';
import { prisma } from '../../data/postgresql';
import { CreateTutorshipDto, UpdateTutorshipDto } from '../../domain/dtos';


export class TutorshipController {
  
  constructor() { }
  public getTutorships = async( req: Request, res: Response ) => {
    const tutorships = await prisma.ayudantia.findMany();
    return res.json( tutorships );
  };

  public getTutorshipById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const tutorship = await prisma.ayudantia.findFirst({
      where: { id }
    });
    
    ( tutorship )
      ? res.json( tutorship )
      : res.status( 404 ).json( { error: `Tutorship with id ${ id } not found` } );
  };


  public createTutorship = async( req: Request, res: Response ) => {
    
    const [error, createTutorshipDto] = CreateTutorshipDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const tutorship = await prisma.ayudantia.create({
      data: createTutorshipDto!
    });

    res.json( tutorship );

  };

  public updateTutorship = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateTutorshipDto] = UpdateTutorshipDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const tutorship = await prisma.ayudantia.findFirst({
      where: { id }
    });

    if ( !tutorship ) return res.status( 404 ).json( { error: `Tutorship with id ${ id } not found` } );

    const updatedTutorship = await prisma.ayudantia.update({
      where: { id },
      data: updateTutorshipDto!.values
    });
  
    res.json( updatedTutorship );
  }


  public deleteTutorship = async(req:Request, res: Response) => {
    const id = +req.params.id;

    const tutorship = await prisma.ayudantia.findFirst({
      where: { id }
    });

    if ( !tutorship ) return res.status(404).json({ error: `Tutorship with id ${ id } not found` });

    const deleted = await prisma.ayudantia.delete({
      where: { id }
    });

    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Tutorship with id ${ id } not found` });
    

  }
}