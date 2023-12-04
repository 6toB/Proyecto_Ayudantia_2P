import { Router } from 'express';
import { TutorsController } from './controller';
import { TutorDatasourceImpl } from '../../infrastructure/datasource/tutor.datasource.impl';
import { TutorRepositoryImpl } from '../../infrastructure/repositories/tutor.repository.impl';


export class TutorRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new TutorDatasourceImpl();
    const TutorRepository = new TutorRepositoryImpl( datasource );
    const TutorController = new TutorsController(TutorRepository);

    router.get('/', TutorController.getTutors );
    router.get('/:id', TutorController.getTutorById );
    
    router.post('/', TutorController.createTutor );
    router.put('/:id', TutorController.updateTutor );
    router.delete('/:id', TutorController.deleteTutor);


    return router;
  }


}

