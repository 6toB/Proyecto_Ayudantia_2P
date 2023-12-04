import { TutoriaEntity } from '../../entities/tutoria.entity';
import { TutoriaRepository } from '../../repositories/tutoria.repository';


export interface GetTutorshipUseCase {
  execute( id: number ): Promise<TutoriaEntity>
}


export class GetTutorship implements GetTutorshipUseCase {
  
  constructor(
    private readonly repository: TutoriaRepository,
  ) {}
  
  execute( id: number ): Promise<TutoriaEntity> {
    return this.repository.findById(id);
  }

}

