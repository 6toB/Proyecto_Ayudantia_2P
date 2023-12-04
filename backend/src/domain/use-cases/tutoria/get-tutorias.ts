import { TutoriaEntity } from '../../entities/tutoria.entity';
import { TutoriaRepository } from '../../repositories/tutoria.repository';


export interface GetTutorshipsUseCase {
  execute(): Promise<TutoriaEntity[]>
}


export class GetTutorships implements GetTutorshipsUseCase {
  
  constructor(
    private readonly repository: TutoriaRepository,
  ) {}
  
  execute(): Promise<TutoriaEntity[]> {
    return this.repository.getAll();
  }

}

