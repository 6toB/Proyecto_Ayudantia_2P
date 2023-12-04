import { EstudianteEntity } from '../../entities/estudiante.entity';
import { EstudianteRepository } from '../../repositories/estudiante.repository';


export interface GetStudentsUseCase {
  execute(): Promise<EstudianteEntity[]>
}


export class GetStudents implements GetStudentsUseCase {
  
  constructor(
    private readonly repository: EstudianteRepository,
  ) {}
  
  execute(): Promise<EstudianteEntity[]> {
    return this.repository.getAll();
  }

}

