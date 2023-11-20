import { Router } from 'express';
import { StudentController } from './controller';

export class StudentRoutes {

  static get routes(): Router {

    const router = Router();

    const studentController = new StudentController();

    /**
     * @swagger
     * /students:
     *    get:
     *         description: A list of students.
     */
    router.get('/', studentController.getStudent );
    /**
     * @swagger
     * /students/{id}:
     *    get:
     *         description: Numeric ID of the student to retrieve
     */
    router.get('/:id', studentController.getStudentById );
    /**
     * @swagger
     * /students:
     *   post:
     *     summary: Create a new student
     */
    router.post('/', studentController.createStudent );
    /**
     * @swagger
     * /students/{id}:
     *   put:
     *     summary: Update a student by ID
     */
    router.put('/:id', studentController.updateStudent );
    /**
     * @swagger
     * /students/{id}:
     *   delete:
     *     summary: Delete a student by ID
     */
    router.delete('/:id', studentController.deleteStudent );

    return router;
  }


}

