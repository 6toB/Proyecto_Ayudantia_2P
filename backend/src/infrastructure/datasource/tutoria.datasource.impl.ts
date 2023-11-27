import { prisma } from '../../data/postgres';
import { CreateTutorshipDto, TutoriaDatasource, TutoriaEntity, UpdateTutorshipDto } from '../../domain';


export class TutorshipDatasourceImpl implements TutoriaDatasource {

  async create( createTutorshipDto: CreateTutorshipDto ): Promise<TutoriaEntity> {
    const tutorship = await prisma.ayudantia.create({
      data: createTutorshipDto!
    });

    return TutoriaEntity.fromObject( tutorship );
  }

  async getAll(): Promise<TutoriaEntity[]> {
    const tutorships = await prisma.ayudantia.findMany();
    return tutorships.map( tutorship => TutoriaEntity.fromObject(tutorship) );
  }

  async findById( id: number ): Promise<TutoriaEntity> {
    const tutorship = await prisma.ayudantia.findFirst({
      where: { id }
    });

    if ( !tutorship ) throw `Tutorship with id ${ id } not found`;
    return TutoriaEntity.fromObject(tutorship);
  }

  async updateById( updateTutorshipDto: UpdateTutorshipDto ): Promise<TutoriaEntity> {
    await this.findById( updateTutorshipDto.id );
    
    const updateTutorship = await prisma.ayudantia.update({
      where: { id: updateTutorshipDto.id },
      data: updateTutorshipDto!.values
    });

    return TutoriaEntity.fromObject(updateTutorship);
  }

  async deleteById( id: number ): Promise<TutoriaEntity> {
    await this.findById( id );
    const deleted = await prisma.ayudantia.delete({
      where: { id }
    });

    return TutoriaEntity.fromObject( deleted );
  }

}