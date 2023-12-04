import { TutorEntity } from '../../entities/tutor.entity';
import { TutorRepository } from '../../repositories/tutor.repository';


export interface DeleteTutorUseCase {
  execute( id: number ): Promise<TutorEntity>
}

export class DeleteTutor implements DeleteTutorUseCase {
  
  constructor(
    private readonly repository: TutorRepository,
  ) {}
  
  execute( id: number ): Promise<TutorEntity> {
    return this.repository.deleteById(id);
  }

}

