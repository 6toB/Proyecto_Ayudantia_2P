// DDD
import { Request, Response } from 'express';
import { CreateReasonDto, UpdateReasonDto } from '../../domain/dtos';
import { MotivoRepository } from '../../domain';


export class ReasonsController {

  //* DI
  constructor(
    private readonly motivoRepository: MotivoRepository,
  ) { }


  public getReasons = async ( req: Request, res: Response ) => {
    const reasons = await this.motivoRepository.getAll();
    return res.json( reasons );
  };

  public getReasonById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const reason = await this.motivoRepository.findById( id );
      res.json( reason );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createReason = async ( req: Request, res: Response ) => {
    const [ error, createReasonDto ] = CreateReasonDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const reason = await this.motivoRepository.create( createReasonDto! );
    res.json( reason );

  };

  public updateReason = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateReasonDto ] = UpdateReasonDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedreason = await this.motivoRepository.updateById( updateReasonDto! );
    return res.json( updatedreason );

  };


  public deleteReason = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedReason = await this.motivoRepository.deleteById( id );
    res.json( deletedReason );

  };



}