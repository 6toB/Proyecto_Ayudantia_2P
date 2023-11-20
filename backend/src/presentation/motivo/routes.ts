import { Router } from 'express';
import { ReasonController } from './controller';


export class ReasonRoutes {


  static get routes(): Router {

    const router = Router();

    const reasonController = new ReasonController();

    router.get('/', reasonController.getReasons );
    router.get('/:id', reasonController.getReasonById );
    
    router.post('/', reasonController.createReason );

    router.put('/:id', reasonController.updateReason );
    
    router.delete('/:id', reasonController.deleteReason );


    return router;
  }


}

