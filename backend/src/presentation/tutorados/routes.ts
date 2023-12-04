import { Router } from 'express';
import { TutoredsController } from './controller';
import { TutoredDatasourceImpl } from '../../infrastructure/datasource/tutorado.datasource.impl';
import { TutoredRepositoryImpl } from '../../infrastructure/repositories/tutorado.repository.impl';


export class TutoredRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new TutoredDatasourceImpl();
    const tutoredRepository = new TutoredRepositoryImpl( datasource );
    const tutored = new TutoredsController(tutoredRepository);

    router.get('/', tutored.getTutoreds );
    router.get('/:id', tutored.getTutoredById );
    
    router.post('/', tutored.createTutored );
    router.put('/:id', tutored.updateTutored );
    router.delete('/:id', tutored.deleteTutored );


    return router;
  }


}