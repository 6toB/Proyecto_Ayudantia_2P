import { Router } from 'express';
import { TutoredController } from './controller';


export class TutoredRoutes {


  static get routes(): Router {

    const router = Router();

    const tutoredController = new TutoredController();

    router.get('/', tutoredController.getTutoreds );
    router.get('/:id', tutoredController.getTutoredById );
    
    router.post('/', tutoredController.createTutored );
    router.put('/:id', tutoredController.updateTutored );
    router.delete('/:id', tutoredController.deleteTutored );


    return router;
  }


}

