import { prisma } from '../../data/postgres';
import { CreateTutorDto, TutorDatasource, TutorEntity, UpdateTutorDto } from '../../domain';

export class TutorDatasourceImpl implements TutorDatasource {

  async create( createTutorDto: CreateTutorDto ): Promise<TutorEntity> {
    const tutor = await prisma.tutor.create({
      data: createTutorDto!
    });

    return TutorEntity.fromObject( tutor );
  }

  async getAll(): Promise<TutorEntity[]> {
    const tutors = await prisma.tutor.findMany();
    return tutors.map( Tutor => TutorEntity.fromObject(Tutor) );
  }

  async findById( id: number ): Promise<TutorEntity> {
    const tutor = await prisma.tutor.findFirst({
      where: { id }
    });

    if ( !tutor ) throw `Tutor with id ${ id } not found`;
    return TutorEntity.fromObject(tutor);
  }

  async updateById( updateTutorDto: UpdateTutorDto ): Promise<TutorEntity> {
    await this.findById( updateTutorDto.id );
    
    const updatedTutor = await prisma.tutor.update({
      where: { id: updateTutorDto.id },
      data: updateTutorDto!.values
    });

    return TutorEntity.fromObject(updatedTutor);
  }

  async deleteById( id: number ): Promise<TutorEntity> {
    await this.findById( id );
    const deleted = await prisma.tutor.delete({
      where: { id }
    });

    return TutorEntity.fromObject( deleted );
  }

}