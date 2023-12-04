import { CreateStudentDto } from '../../dtos';
import { EstudianteEntity } from '../../entities/estudiante.entity';
import { EstudianteRepository } from '../../repositories/estudiante.repository';


export interface CreateStudentUseCase {
  execute( dto: CreateStudentDto ): Promise<EstudianteEntity>
}

// ctrl+ shift + l
export class CreateStudent implements CreateStudentUseCase {
  
  constructor(
    private readonly repository: EstudianteRepository,
  ) {}
  
  execute( dto: CreateStudentDto ): Promise<EstudianteEntity> {
    return this.repository.create(dto);
  }

}

