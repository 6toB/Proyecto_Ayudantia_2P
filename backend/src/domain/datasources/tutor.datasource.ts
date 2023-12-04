import { CreateTutorDto, UpdateTutorDto } from '../dtos';
import { TutorEntity } from '../entities/tutor.entity';



export abstract class TutorDatasource {

  abstract create( createTutorDto: CreateTutorDto ): Promise<TutorEntity>;

  abstract getAll(): Promise<TutorEntity[]>;

  abstract findById( id: number ): Promise<TutorEntity>;
  abstract updateById( updateTutorDto: UpdateTutorDto ): Promise<TutorEntity>;
  abstract deleteById( id: number ): Promise<TutorEntity>;

}