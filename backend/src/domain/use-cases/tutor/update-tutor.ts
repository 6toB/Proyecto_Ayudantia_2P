import { UpdateTutorDto } from '../../dtos';
import { TutorEntity } from '../../entities/tutor.entity';
import { TutorRepository } from '../../repositories/tutor.repository';


export interface UpdateTutorUseCase {
  execute( dto: UpdateTutorDto ): Promise<TutorEntity>
}


export class UpdateTutor implements UpdateTutorUseCase {
  
  constructor(
    private readonly repository: TutorRepository,
  ) {}
  
  execute( dto: UpdateTutorDto ): Promise<TutorEntity> {
    return this.repository.updateById(dto);
  }

}