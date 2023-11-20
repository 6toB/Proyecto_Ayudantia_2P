import { Router } from 'express';

import { StudentRoutes  } from './estudiantes/routes';
import {  ReasonRoutes  } from './motivo/routes';
import {TutoredRoutes} from './tutorados/routes'
import {TutorRoutes} from './tutores/routes'
import {TutorshipRoutes} from './tutorias/routes'

export class AppRoutes {

  static get routes(): Router {

    const router = Router();

    router.use('/api/students', StudentRoutes.routes );
    router.use('/api/reasons', ReasonRoutes.routes );
    router.use('/api/tutoreds', TutoredRoutes.routes );
    router.use('/api/tutors', TutorRoutes.routes );
    router.use('/api/tutorship', TutorshipRoutes.routes );
    
    //localhost:3000/api/student
    //localhost:3000/api/reasons
    //localhost:3000/api/tutoreds
    //localhost:3000/api/tutors
    //localhost:3000/api/tutorship

    return router;
  }
}