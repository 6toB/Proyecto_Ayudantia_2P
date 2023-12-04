import { Router } from 'express';
import { StudentsController } from './controller';
import { EstudianteDatasourceImpl } from '../../infrastructure/datasource/estudiante.datasource.impl';
import { StudentRepositoryImpl } from '../../infrastructure/repositories/estudiante.repository.impl';


export class StudentRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new EstudianteDatasourceImpl();
    const studentRepository = new StudentRepositoryImpl( datasource );
    const studentController = new StudentsController(studentRepository);

    router.get('/', studentController.getStudents );
    router.get('/:id', studentController.getStudentById );
    
    router.post('/', studentController.createStudent );
    router.put('/:id', studentController.updateStudent );
    router.delete('/:id', studentController.deleteStudent );


    return router;
  }


}

