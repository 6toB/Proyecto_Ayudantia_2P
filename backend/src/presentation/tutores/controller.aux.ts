// DDD
import { Request, Response } from 'express';
import { CreateTutorDto, UpdateTutorDto } from '../../domain/dtos';
import { TutorRepository } from '../../domain';


export class TutorsController {

  //* DI
  constructor(
    private readonly tutorRepository: TutorRepository,
  ) { }


  public getTutors = async ( req: Request, res: Response ) => {
    const tutors = await this.tutorRepository.getAll();
    return res.json( tutors );
  };

  public getTutorById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const tutor = await this.tutorRepository.findById( id );
      res.json( tutor );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createTutor = async ( req: Request, res: Response ) => {
    const [ error, createTutorDto ] = CreateTutorDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const tutor = await this.tutorRepository.create( createTutorDto! );
    res.json( tutor );

  };

  public updateTutor = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateTutorDto ] = UpdateTutorDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedTutor = await this.tutorRepository.updateById( updateTutorDto! );
    return res.json( updatedTutor );

  };


  public deleteTutor = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedTutor = await this.tutorRepository.deleteById( id );
    res.json( deletedTutor );

  };



}