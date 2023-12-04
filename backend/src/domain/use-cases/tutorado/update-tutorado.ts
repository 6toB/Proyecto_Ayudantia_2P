import { UpdateTutoredDto } from '../../dtos';
import { TutoradoEntity } from '../../entities/tutorado.entity';
import { TutoradoRepository } from '../../repositories/tutorado.repository';


export interface UpdateTutoredUseCase {
  execute( dto: UpdateTutoredDto ): Promise<TutoradoEntity>
}


export class UpdateTutored implements UpdateTutoredUseCase {
  
  constructor(
    private readonly repository: TutoradoRepository,
  ) {}
  
  execute( dto: UpdateTutoredDto ): Promise<TutoradoEntity> {
    return this.repository.updateById(dto);
  }

}

