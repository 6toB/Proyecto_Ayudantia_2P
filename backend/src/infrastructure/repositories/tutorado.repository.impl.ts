import { CreateTutoredDto, TutoradoDatasource, TutoradoEntity, TutoradoRepository, UpdateTutoredDto } from '../../domain';


export class TutoredRepositoryImpl implements TutoradoRepository {

  constructor(
    private readonly datasource: TutoradoDatasource,
  ) { }


  create( createTutoredDto: CreateTutoredDto ): Promise<TutoradoEntity> {
    return this.datasource.create( createTutoredDto );
  }

  getAll(): Promise<TutoradoEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<TutoradoEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateTutoredDto: UpdateTutoredDto ): Promise<TutoradoEntity> {
    return this.datasource.updateById( updateTutoredDto );
  }

  deleteById( id: number ): Promise<TutoradoEntity> {
    return this.datasource.deleteById( id );
  }

}


