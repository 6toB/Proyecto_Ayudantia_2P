import { MotivoEntity } from '../../entities/motivo.entity';
import { MotivoRepository } from '../../repositories/motivo.repository';


export interface DeleteReasonUseCase {
  execute( id: number ): Promise<MotivoEntity>
}

export class DeleteReason implements DeleteReasonUseCase {
  
  constructor(
    private readonly repository: MotivoRepository,
  ) {}
  
  execute( id: number ): Promise<MotivoEntity> {
    return this.repository.deleteById(id);
  }

}

