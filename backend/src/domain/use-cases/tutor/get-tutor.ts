import { TutorEntity } from '../../entities/tutor.entity';
import { TutorRepository } from '../../repositories/tutor.repository';


export interface GetTutorUseCase {
  execute( id: number ): Promise<TutorEntity>
}


export class GetTutor implements GetTutorUseCase {
  
  constructor(
    private readonly repository: TutorRepository,
  ) {}
  
  execute( id: number ): Promise<TutorEntity> {
    return this.repository.findById(id);
  }

}

