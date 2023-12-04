import { UpdateStudentDto } from '../../dtos';
import { EstudianteEntity } from '../../entities/estudiante.entity';
import { EstudianteRepository } from '../../repositories/estudiante.repository';


export interface UpdateStudentUseCase {
  execute( dto: UpdateStudentDto ): Promise<EstudianteEntity>
}


export class UpdateStudent implements UpdateStudentUseCase {
  
  constructor(
    private readonly repository: EstudianteRepository,
  ) {}
  
  execute( dto: UpdateStudentDto ): Promise<EstudianteEntity> {
    return this.repository.updateById(dto);
  }

}

