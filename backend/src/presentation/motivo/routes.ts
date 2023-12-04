import { Router } from 'express';
import { ReasonsController } from './controller';
import { ReasonDatasourceImpl } from '../../infrastructure/datasource/motivo.datasource.impl';
import { ReasonRepositoryImpl } from '../../infrastructure/repositories/motivo.repository.impl';


export class ReasonRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new ReasonDatasourceImpl();
    const reasonRepository = new ReasonRepositoryImpl( datasource );
    const reasonController = new ReasonsController(reasonRepository);

    router.get('/', reasonController.getReasons );
    router.get('/:id', reasonController.getReasonById );
    
    router.post('/', reasonController.createReason );
    router.put('/:id', reasonController.updateReason );
    router.delete('/:id', reasonController.deleteReason );


    return router;
  }


}

