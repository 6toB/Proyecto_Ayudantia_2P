import { UpdateReasonDto } from '../../dtos';
import { MotivoEntity } from '../../entities/motivo.entity';
import { MotivoRepository } from '../../repositories/motivo.repository';


export interface UpdateReasonUseCase {
  execute( dto: UpdateReasonDto ): Promise<MotivoEntity>
}


export class UpdateReason implements UpdateReasonUseCase {
  
  constructor(
    private readonly repository: MotivoRepository,
  ) {}
  
  execute( dto: UpdateReasonDto ): Promise<MotivoEntity> {
    return this.repository.updateById(dto);
  }

}

