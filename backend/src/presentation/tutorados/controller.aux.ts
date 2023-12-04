// DDD
import { Request, Response } from 'express';
import { CreateTutoredDto, UpdateTutoredDto } from '../../domain/dtos';
import { TutoradoRepository } from '../../domain';


export class TutorsController {

  //* DI
  constructor(
    private readonly tutoredRepository: TutoradoRepository,
  ) { }


  public getTutoreds = async ( req: Request, res: Response ) => {
    const tutoreds = await this.tutoredRepository.getAll();
    return res.json( tutoreds );
  };

  public getTutoredById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const tutored = await this.tutoredRepository.findById( id );
      res.json( tutored );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createTutored = async ( req: Request, res: Response ) => {
    const [ error, createTutoredDto ] = CreateTutoredDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const tutored = await this.tutoredRepository.create( createTutoredDto! );
    res.json( tutored );

  };

  public updateTutored = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateTutoredDto ] = UpdateTutoredDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedTutor = await this.tutoredRepository.updateById( updateTutoredDto! );
    return res.json( updatedTutor );

  };


  public deleteTutored = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedTutored = await this.tutoredRepository.deleteById( id );
    res.json( deletedTutored );

  };



}