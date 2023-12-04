import { TutoriaEntity } from '../../entities/tutoria.entity';
import { TutoriaRepository } from '../../repositories/tutoria.repository';


export interface DeleteTutorshipUseCase {
  execute( id: number ): Promise<TutoriaEntity>
}

export class DeleteTutorship implements DeleteTutorshipUseCase {
  
  constructor(
    private readonly repository: TutoriaRepository,
  ) {}
  
  execute( id: number ): Promise<TutoriaEntity> {
    return this.repository.deleteById(id);
  }

}

