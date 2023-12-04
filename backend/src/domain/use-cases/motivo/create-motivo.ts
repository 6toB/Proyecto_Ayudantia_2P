import { CreateReasonDto } from '../../dtos';
import { MotivoEntity } from '../../entities/motivo.entity';
import { MotivoRepository } from '../../repositories/motivo.repository';


export interface CreateReasonUseCase {
  execute( dto: CreateReasonDto ): Promise<MotivoEntity>
}

// ctrl+ shift + l
export class CreateReason implements CreateReasonUseCase {
  
  constructor(
    private readonly repository: MotivoRepository,
  ) {}
  
  execute( dto: CreateReasonDto ): Promise<MotivoEntity> {
    return this.repository.create(dto);
  }

}

