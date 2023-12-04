import { TutoradoEntity } from '../../entities/tutorado.entity';
import { TutoradoRepository } from '../../repositories/tutorado.repository';


export interface GetTutoredsUseCase {
  execute(): Promise<TutoradoEntity[]>
}


export class GetTutoreds implements GetTutoredsUseCase {
  
  constructor(
    private readonly repository: TutoradoRepository,
  ) {}
  
  execute(): Promise<TutoradoEntity[]> {
    return this.repository.getAll();
  }

}

