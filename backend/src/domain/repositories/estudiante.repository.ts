import { CreateStudentDto, UpdateStudentDto } from '../dtos';
import { EstudianteEntity } from '../entities/estudiante.entity';



export abstract class EstudianteRepository {

  abstract create( createStudentDto: CreateStudentDto ): Promise<EstudianteEntity>;

  abstract getAll(): Promise<EstudianteEntity[]>;

  abstract findById( id: number ): Promise<EstudianteEntity>;
  abstract updateById( updateStudentDto: UpdateStudentDto ): Promise<EstudianteEntity>;
  abstract deleteById( id: number ): Promise<EstudianteEntity>;

}