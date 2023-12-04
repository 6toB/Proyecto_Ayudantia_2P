import { TutoradoEntity } from '../../entities/tutorado.entity';
import { TutoradoRepository } from '../../repositories/tutorado.repository';


export interface DeleteTutoredUseCase {
  execute( id: number ): Promise<TutoradoEntity>
}

export class DeleteTutored implements DeleteTutoredUseCase {
  
  constructor(
    private readonly repository: TutoradoRepository,
  ) {}
  
  execute( id: number ): Promise<TutoradoEntity> {
    return this.repository.deleteById(id);
  }

}

