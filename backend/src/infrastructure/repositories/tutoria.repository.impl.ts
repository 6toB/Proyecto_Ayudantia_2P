import { CreateTutorshipDto, TutoriaDatasource, TutoriaRepository, TutoriaEntity, UpdateTutorshipDto } from '../../domain';


export class TutorshipRepositoryImpl implements TutoriaRepository {

  constructor(
    private readonly datasource: TutoriaDatasource,
  ) { }


  create( createTutorshipDto: CreateTutorshipDto ): Promise<TutoriaEntity> {
    return this.datasource.create( createTutorshipDto );
  }

  getAll(): Promise<TutoriaEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<TutoriaEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateTutorshipDto: UpdateTutorshipDto ): Promise<TutoriaEntity> {
    return this.datasource.updateById( updateTutorshipDto );
  }

  deleteById( id: number ): Promise<TutoriaEntity> {
    return this.datasource.deleteById( id );
  }

}


