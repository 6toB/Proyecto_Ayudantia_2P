import { MotivoEntity } from '../../entities/motivo.entity';
import { MotivoRepository } from '../../repositories/motivo.repository';


export interface GetReasonsUseCase {
  execute(): Promise<MotivoEntity[]>
}


export class GetReasons implements GetReasonsUseCase {
  
  constructor(
    private readonly repository: MotivoRepository,
  ) {}
  
  execute(): Promise<MotivoEntity[]> {
    return this.repository.getAll();
  }

}

