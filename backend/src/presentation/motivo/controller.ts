import { Request, Response } from 'express';
import { prisma } from '../../data/postgresql';
import { CreateReasonDto, UpdateReasonDto } from '../../domain/dtos';


export class ReasonController {

  constructor() { }
  public getReasons = async( req: Request, res: Response ) => {
    const reason = await prisma.motivoAyudantia.findMany();
    return res.json( reason );
  };
  public getReasonById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const reason = await prisma.motivoAyudantia.findFirst({
      where: { id }
    });
    
    ( reason )
      ? res.json( reason )
      : res.status( 404 ).json( { error: `Reason with id ${ id } not found` } );
  };
  public createReason = async( req: Request, res: Response ) => {
    
    const [error, createReasonDto] = CreateReasonDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const reason = await prisma.motivoAyudantia.create({
      data: createReasonDto!
    });

    res.json( reason );

  };
  public updateReason = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateReasonDto] = UpdateReasonDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const reason = await prisma.motivoAyudantia.findFirst({
      where: { id }
    });

    if ( !reason ) return res.status( 404 ).json( { error: `Reason with id ${ id } not found` } );

    const updatedReason = await prisma.motivoAyudantia.update({
      where: { id },
      data: updateReasonDto!.values
    });
  
    res.json( updatedReason );

  }
  public deleteReason = async(req:Request, res: Response) => {
    const id = +req.params.id;

    const reason = await prisma.motivoAyudantia.findFirst({
      where: { id }
    });

    if ( !reason ) return res.status(404).json({ error: `Reason with id ${ id } not found` });

    const deleted = await prisma.motivoAyudantia.delete({
      where: { id }
    });

    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `User with id ${ id } not found` });
    

  }
}