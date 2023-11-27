import { prisma } from '../../data/postgres';
import { CreateTutoredDto, TutoradoDatasource, TutoradoEntity, UpdateTutoredDto } from '../../domain';


export class TutoredDatasourceImpl implements TutoradoDatasource {

  async create( createTutoredDto: CreateTutoredDto ): Promise<TutoradoEntity> {
    const tutored = await prisma.tutorado.create({
      data: createTutoredDto!
    });

    return TutoradoEntity.fromObject( tutored );
  }

  async getAll(): Promise<TutoradoEntity[]> {
    const tutoreds = await prisma.tutorado.findMany();
    return tutoreds.map( tutored => TutoradoEntity.fromObject(tutored) );
  }

  async findById( id: number ): Promise<TutoradoEntity> {
    const tutored = await prisma.tutorado.findFirst({
      where: { id }
    });

    if ( !tutored ) throw `Tutored with id ${ id } not found`;
    return TutoradoEntity.fromObject(tutored);
  }

  async updateById( updateTutoredDto: UpdateTutoredDto ): Promise<TutoradoEntity> {
    await this.findById( updateTutoredDto.id );
    
    const updatedTutored = await prisma.tutorado.update({
      where: { id: updateTutoredDto.id },
      data: updateTutoredDto!.values
    });

    return TutoradoEntity.fromObject(updatedTutored);
  }

  async deleteById( id: number ): Promise<TutoradoEntity> {
    await this.findById( id );
    const deleted = await prisma.tutorado.delete({
      where: { id }
    });

    return TutoradoEntity.fromObject( deleted );
  }

}