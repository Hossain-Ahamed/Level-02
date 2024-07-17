import express from 'express';
import { FacultyControllers } from './faculty.controller';
import { validateRequest } from '../../../middlewares/validateRequest';
import { FacultyValidations } from './faculty.validation';

const router = express.Router();

router.get('/', FacultyControllers.getAllFaculty);
router.get('/:facultyID', FacultyControllers.getSingleFaculty);
router.patch(
  '/:facultyID',
  validateRequest(FacultyValidations.Update_FacultyValidationSchema),
  FacultyControllers.updateFaculty,
);
router.delete('/:facultyID', FacultyControllers.deleteFaculty);

export const FacultyRoutes = router;
