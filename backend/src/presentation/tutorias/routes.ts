import { Router } from 'express';
import { TutorshipController } from '../tutorias/contoller';


export class TutorshipRoutes {


  static get routes(): Router {

    const router = Router();

    const tutorshipController = new TutorshipController();

    router.get('/', tutorshipController.getTutorships );
    router.get('/:id', tutorshipController.getTutorshipById );
    
    router.post('/', tutorshipController.createTutorship );

    router.put('/:id', tutorshipController.updateTutorship );
    
    router.delete('/:id', tutorshipController.deleteTutorship );


    return router;
  }
}