import { CreateTutorDto, TutorDatasource, TutorEntity, TutorRepository, UpdateTutorDto } from '../../domain';


export class TutorRepositoryImpl implements TutorRepository {

  constructor(
    private readonly datasource: TutorDatasource,
  ) { }


  create( createTutorDto: CreateTutorDto ): Promise<TutorEntity> {
    return this.datasource.create( createTutorDto );
  }

  getAll(): Promise<TutorEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<TutorEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateTutorDto: UpdateTutorDto ): Promise<TutorEntity> {
    return this.datasource.updateById( updateTutorDto );
  }

  deleteById( id: number ): Promise<TutorEntity> {
    return this.datasource.deleteById( id );
  }

}


