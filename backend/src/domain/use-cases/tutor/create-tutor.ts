import { CreateTutorDto } from '../../dtos';
import { TutorEntity } from '../../entities/tutor.entity';
import { TutorRepository } from '../../repositories/tutor.repository';


export interface CreateTutorUseCase {
  execute( dto: CreateTutorDto ): Promise<TutorEntity>
}

// ctrl+ shift + l
export class CreateTutor implements CreateTutorUseCase {
  
  constructor(
    private readonly repository: TutorRepository,
  ) {}
  
  execute( dto: CreateTutorDto ): Promise<TutorEntity> {
    return this.repository.create(dto);
  }

}

