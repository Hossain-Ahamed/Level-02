import express from 'express';
import { validateRequest } from '../../../middlewares/validateRequest';
import { AcademicDepartmentValidations } from './academicDepartment.validation';
import { AcademicDepartmentControllers } from './academicDepartment.controller';
import { academicFacultyValidation } from '../academicFaculty/academicFaculty.validation';

const router = express.Router();

router.post(
  '/create-academic-department',
  validateRequest(
    AcademicDepartmentValidations.createAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.createAcademicDepartment,
);
router.get('/', AcademicDepartmentControllers.getAllAcademicDepartments);
router.get(
  '/:deptId',
  AcademicDepartmentControllers.getSingleAcademicDepartment,
);
router.patch(
  '/:deptId',
  validateRequest(
    academicFacultyValidation.updatecademicFacultyValidationSchema,
  ),
  AcademicDepartmentControllers.updateAcademicDepartment,
);

export const AcademicDepartmentRouters = router;
