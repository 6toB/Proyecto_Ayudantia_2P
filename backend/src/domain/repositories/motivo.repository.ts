import { CreateReasonDto, UpdateReasonDto } from '../dtos';
import { MotivoEntity } from '../entities/motivo.entity';



export abstract class MotivoRepository {

  abstract create( createReasonDto: CreateReasonDto ): Promise<MotivoEntity>;

  abstract getAll(): Promise<MotivoEntity[]>;

  abstract findById( id: number ): Promise<MotivoEntity>;
  abstract updateById( updateReasonDto: UpdateReasonDto ): Promise<MotivoEntity>;
  abstract deleteById( id: number ): Promise<MotivoEntity>;

}