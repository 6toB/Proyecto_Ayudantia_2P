import { prisma } from '../../data/postgres';
import { CreateReasonDto, MotivoDatasource, MotivoEntity, UpdateReasonDto } from '../../domain';


export class ReasonDatasourceImpl implements MotivoDatasource {

  async create( createReasonDto: CreateReasonDto ): Promise<MotivoEntity> {
    const reason = await prisma.motivoAyudantia.create({
      data: createReasonDto!
    });

    return MotivoEntity.fromObject( reason );
  }

  async getAll(): Promise<MotivoEntity[]> {
    const reasons = await prisma.motivoAyudantia.findMany();
    return reasons.map( reason => MotivoEntity.fromObject(reason) );
  }

  async findById( id: number ): Promise<MotivoEntity> {
    const reason = await prisma.motivoAyudantia.findFirst({
      where: { id }
    });

    if ( !reason ) throw `Reason with id ${ id } not found`;
    return MotivoEntity.fromObject(reason);
  }

  async updateById( updateReasonDto: UpdateReasonDto ): Promise<MotivoEntity> {
    await this.findById( updateReasonDto.id );
    
    const updatedReason = await prisma.motivoAyudantia.update({
      where: { id: updateReasonDto.id },
      data: updateReasonDto!.values
    });

    return MotivoEntity.fromObject(updatedReason);
  }

  async deleteById( id: number ): Promise<MotivoEntity> {
    await this.findById( id );
    const deleted = await prisma.motivoAyudantia.delete({
      where: { id }
    });

    return MotivoEntity.fromObject( deleted );
  }

}