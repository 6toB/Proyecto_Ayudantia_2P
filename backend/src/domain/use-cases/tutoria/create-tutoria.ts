import { CreateTutorshipDto } from '../../dtos';
import { TutoriaEntity } from '../../entities/tutoria.entity';
import { TutoriaRepository } from '../../repositories/tutoria.repository';


export interface CreateTutorshipUseCase {
  execute( dto: CreateTutorshipDto ): Promise<TutoriaEntity>
}

// ctrl+ shift + l
export class CreateTutorship implements CreateTutorshipUseCase {
  
  constructor(
    private readonly repository: TutoriaRepository,
  ) {}
  
  execute( dto: CreateTutorshipDto ): Promise<TutoriaEntity> {
    return this.repository.create(dto);
  }

}

