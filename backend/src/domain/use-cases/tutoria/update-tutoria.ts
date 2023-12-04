import { UpdateTutorshipDto } from '../../dtos';
import { TutoriaEntity } from '../../entities/tutoria.entity';
import { TutoriaRepository } from '../../repositories/tutoria.repository';


export interface UpdateTutorshipUseCase {
  execute( dto: UpdateTutorshipDto ): Promise<TutoriaEntity>
}


export class UpdateTutorship implements UpdateTutorshipUseCase {
  
  constructor(
    private readonly repository: TutoriaRepository,
  ) {}
  
  execute( dto: UpdateTutorshipDto ): Promise<TutoriaEntity> {
    return this.repository.updateById(dto);
  }

}

