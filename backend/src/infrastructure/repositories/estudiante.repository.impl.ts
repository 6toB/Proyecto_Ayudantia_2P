import { CreateStudentDto, EstudianteDatasource, EstudianteEntity, EstudianteRepository, UpdateStudentDto } from '../../domain';


export class StudentRepositoryImpl implements EstudianteRepository {

  constructor(
    private readonly datasource: EstudianteDatasource,
  ) { }


  create( cereateStudentDto: CreateStudentDto ): Promise<EstudianteEntity> {
    return this.datasource.create( cereateStudentDto );
  }

  getAll(): Promise<EstudianteEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<EstudianteEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateStudentDto: UpdateStudentDto ): Promise<EstudianteEntity> {
    return this.datasource.updateById( updateStudentDto );
  }

  deleteById( id: number ): Promise<EstudianteEntity> {
    return this.datasource.deleteById( id );
  }

}


