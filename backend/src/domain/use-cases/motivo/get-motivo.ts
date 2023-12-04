import { MotivoEntity } from '../../entities/motivo.entity';
import { MotivoRepository } from '../../repositories/motivo.repository';


export interface GetReasonUseCase {
  execute( id: number ): Promise<MotivoEntity>
}


export class GetReason implements GetReasonUseCase {
  
  constructor(
    private readonly repository: MotivoRepository,
  ) {}
  
  execute( id: number ): Promise<MotivoEntity> {
    return this.repository.findById(id);
  }

}

