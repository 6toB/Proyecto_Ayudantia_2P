import { CreateTutorshipDto, UpdateTutorshipDto } from '../dtos';
import { TutoriaEntity } from '../entities/tutoria.entity';



export abstract class TutoriaRepository {

  abstract create( createTutorshipDto: CreateTutorshipDto ): Promise<TutoriaEntity>;

  abstract getAll(): Promise<TutoriaEntity[]>;

  abstract findById( id: number ): Promise<TutoriaEntity>;
  abstract updateById( updateTutorshipDto: UpdateTutorshipDto ): Promise<TutoriaEntity>;
  abstract deleteById( id: number ): Promise<TutoriaEntity>;

}