import { Router } from 'express';
import { TutorController } from './controller';


export class TutorRoutes {


  static get routes(): Router {

    const router = Router();

    const tutorController = new TutorController();

    router.get('/', tutorController.getTutors );
    router.get('/:id', tutorController.getTutorById );
    
    router.post('/', tutorController.createTutor );

    router.put('/:id', tutorController.updateTutor );
    
    router.delete('/:id', tutorController.deleteTutor );


    return router;
  }


}

