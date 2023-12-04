import { CreateTutoredDto } from '../../dtos';
import { TutoradoEntity } from '../../entities/tutorado.entity';
import { TutoradoRepository } from '../../repositories/tutorado.repository';


export interface CreateTutoredUseCase {
  execute( dto: CreateTutoredDto ): Promise<TutoradoEntity>
}

// ctrl+ shift + l
export class CreateTutored implements CreateTutoredUseCase {
  
  constructor(
    private readonly repository: TutoradoRepository,
  ) {}
  
  execute( dto: CreateTutoredDto ): Promise<TutoradoEntity> {
    return this.repository.create(dto);
  }

}

