import { Router } from 'express';
import { TutorshipsController } from './controller';
import { TutorshipDatasourceImpl } from '../../infrastructure/datasource/tutoria.datasource.impl';
import { TutorshipRepositoryImpl } from '../../infrastructure/repositories/tutoria.repository.impl';


export class TutorshipRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new TutorshipDatasourceImpl();
    const tutorshipRepository = new TutorshipRepositoryImpl( datasource );
    const tutorshipController = new TutorshipsController(tutorshipRepository);

    router.get('/', tutorshipController.getTutorships );
    router.get('/:id', tutorshipController.getTutorshipById );
    
    router.post('/', tutorshipController.createTutorship );
    router.put('/:id', tutorshipController.updateTutorship );
    router.delete('/:id', tutorshipController.deleteTutorship );


    return router;
  }


}

