import { EstudianteEntity } from '../../entities/estudiante.entity';
import { EstudianteRepository } from '../../repositories/estudiante.repository';


export interface GetStudentUseCase {
  execute( id: number ): Promise<EstudianteEntity>
}


export class GetStudent implements GetStudentUseCase {
  
  constructor(
    private readonly repository: EstudianteRepository,
  ) {}
  
  execute( id: number ): Promise<EstudianteEntity> {
    return this.repository.findById(id);
  }

}

