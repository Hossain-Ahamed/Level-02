import express from 'express';
import { FacultyControllers } from './faculty.controller';
import { validateRequest } from '../../../middlewares/validateRequest';
import { FacultyValidations } from './faculty.validation';
import { auth } from '../../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.get('/',auth(USER_ROLE.admin), FacultyControllers.getAllFaculty);
router.get('/:facultyID', FacultyControllers.getSingleFaculty);
router.patch('/:facultyID', validateRequest(FacultyValidations.Update_FacultyValidationSchema),
  FacultyControllers.updateFaculty,
);
router.delete('/:facultyID', FacultyControllers.deleteFaculty);

export const FacultyRoutes = router;
