import { TutoradoEntity } from '../../entities/tutorado.entity';
import { TutoradoRepository } from '../../repositories/tutorado.repository';


export interface GetTutoredUseCase {
  execute( id: number ): Promise<TutoradoEntity>
}


export class GetTutored implements GetTutoredUseCase {
  
  constructor(
    private readonly repository: TutoradoRepository,
  ) {}
  
  execute( id: number ): Promise<TutoradoEntity> {
    return this.repository.findById(id);
  }

}

