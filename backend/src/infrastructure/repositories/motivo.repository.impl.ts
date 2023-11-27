import { CreateReasonDto, MotivoDatasource, MotivoEntity, MotivoRepository, UpdateReasonDto } from '../../domain';


export class ReasonRepositoryImpl implements MotivoRepository {

  constructor(
    private readonly datasource: MotivoDatasource,
  ) { }


  create( createReasonDto: CreateReasonDto ): Promise<MotivoEntity> {
    return this.datasource.create( createReasonDto );
  }

  getAll(): Promise<MotivoEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<MotivoEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateReasonDto: UpdateReasonDto ): Promise<MotivoEntity> {
    return this.datasource.updateById( updateReasonDto );
  }

  deleteById( id: number ): Promise<MotivoEntity> {
    return this.datasource.deleteById( id );
  }

}


