import { prisma } from '../../data/postgres';
import { CreateStudentDto, EstudianteDatasource, EstudianteEntity, UpdateStudentDto } from '../../domain';

export class EstudianteDatasourceImpl implements EstudianteDatasource {

  async create( createStudentDto: CreateStudentDto ): Promise<EstudianteEntity> {
    const { ayudantia, tutor, tutorado, ...rest } =  createStudentDto
    const student = await prisma.estudiante.create({
      data: rest
    });

    return EstudianteEntity.fromObject( student );
  }

  async getAll(): Promise<EstudianteEntity[]> {
    const students = await prisma.estudiante.findMany();
    return students.map( student => EstudianteEntity.fromObject(student) );
  }

  async findById( id: number ): Promise<EstudianteEntity> {
    const student = await prisma.estudiante.findFirst({
      where: { id }
    });

    if ( !student ) throw `Student with id ${ id } not found`;
    return EstudianteEntity.fromObject(student);
  }

  async updateById( updateStudentDto: UpdateStudentDto ): Promise<EstudianteEntity> {
    await this.findById( updateStudentDto.id );
    
    const updatedStudent = await prisma.estudiante.update({
      where: { id: updateStudentDto.id },
      data: updateStudentDto!.values
    });

    return EstudianteEntity.fromObject(updatedStudent);
  }

  async deleteById( id: number ): Promise<EstudianteEntity> {
    await this.findById( id );
    const deleted = await prisma.estudiante.delete({
      where: { id }
    });

    return EstudianteEntity.fromObject( deleted );
  }

}