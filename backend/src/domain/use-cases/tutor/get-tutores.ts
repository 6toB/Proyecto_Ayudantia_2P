import { TutorEntity } from '../../entities/tutor.entity';
import { TutorRepository } from '../../repositories/tutor.repository';


export interface GetTutorsUseCase {
  execute(): Promise<TutorEntity[]>
}


export class GetTutors implements GetTutorsUseCase {
  
  constructor(
    private readonly repository: TutorRepository,
  ) {}
  
  execute(): Promise<TutorEntity[]> {
    return this.repository.getAll();
  }

}

