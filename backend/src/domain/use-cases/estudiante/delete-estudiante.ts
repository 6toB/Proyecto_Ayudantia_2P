import { EstudianteEntity } from '../../entities/estudiante.entity';
import { EstudianteRepository } from '../../repositories/estudiante.repository';


export interface DeleteStudentUseCase {
  execute( id: number ): Promise<EstudianteEntity>
}

export class DeleteStudent implements DeleteStudentUseCase {
  
  constructor(
    private readonly repository: EstudianteRepository,
  ) {}
  
  execute( id: number ): Promise<EstudianteEntity> {
    return this.repository.deleteById(id);
  }

}

