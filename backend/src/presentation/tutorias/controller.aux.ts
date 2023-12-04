// DDD
import { Request, Response } from 'express';
import { CreateTutorshipDto, UpdateTutorshipDto } from '../../domain/dtos';
import { TutoriaRepository } from '../../domain';


export class TutorshipsController {

  //* DI
  constructor(
    private readonly tutorshipRepository: TutoriaRepository,
  ) { }


  public getTutorships = async ( req: Request, res: Response ) => {
    const tutorships = await this.tutorshipRepository.getAll();
    return res.json( tutorships );
  };

  public getTutorshipById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const tutorship = await this.tutorshipRepository.findById( id );
      res.json( tutorship );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createTutorship = async ( req: Request, res: Response ) => {
    const [ error, createTutorshipDto ] = CreateTutorshipDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const tutorship = await this.tutorshipRepository.create( createTutorshipDto! );
    res.json( tutorship );

  };

  public updateTutorship = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateTutorshipDto ] = UpdateTutorshipDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedTutorship = await this.tutorshipRepository.updateById( updateTutorshipDto! );
    return res.json( updatedTutorship );

  };


  public deleteTutorship = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedTutorship = await this.tutorshipRepository.deleteById( id );
    res.json( deletedTutorship );

  };



}