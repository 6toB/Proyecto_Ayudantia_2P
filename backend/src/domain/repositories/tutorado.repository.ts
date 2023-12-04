import { CreateTutoredDto, UpdateTutoredDto } from '../dtos';
import { TutoradoEntity } from '../entities/tutorado.entity';



export abstract class TutoradoRepository {

  abstract create( createTutoredDto: CreateTutoredDto ): Promise<TutoradoEntity>;

  abstract getAll(): Promise<TutoradoEntity[]>;

  abstract findById( id: number ): Promise<TutoradoEntity>;
  abstract updateById( updateTutoredDto: UpdateTutoredDto ): Promise<TutoradoEntity>;
  abstract deleteById( id: number ): Promise<TutoradoEntity>;

}