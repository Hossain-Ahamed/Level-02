import Joi from 'joi';

const NameValidationSchema = Joi.object({
    firstName: Joi.string().required().trim().max(20),
    middleName: Joi.string(),
    lastName: Joi.string().required(),
  });

  const GuardianvalidationSchema = Joi.object({
    fatherName: Joi.string().required(),
    fatherOccupation: Joi.string().required(),
    fatherContactNo: Joi.string().required(),
    motherName: Joi.string().required(),
    motherOccupation: Joi.string().required(),
    motherContactNo: Joi.string().required(),
  });

  const LocalGuardianValidationSchema = Joi.object({
    name: Joi.string().required(),
    occupation: Joi.string().required(),
    contactNo: Joi.string().required(),
    address: Joi.string().required(),
  });

  const StudentValidationSchema = Joi.object({
    id: Joi.string().required(),
    name: NameValidationSchema.required(),
    gender: Joi.string().valid('male', 'female', 'others').required(),
    dateOfBirth: Joi.string().required(),
    contactNo: Joi.string().required(),
    emergencyContactNo: Joi.string().required(),
    bloodGroup: Joi.string().valid(
      'A+',
      'A-',
      'B+',
      'B-',
      'AB+',
      'AB-',
      'O+',
      'O-',
    ),
    email: Joi.string().required().email(),
    presentAddress: Joi.string().required(),
    permanentAddress: Joi.string().required(),
    guardian: GuardianvalidationSchema.required(),
    localGuardian: LocalGuardianValidationSchema.required(),
    profileImg: Joi.string(),
    isActive: Joi.string().valid('active', 'blocked').required(),
    isDeleted : Joi.boolean()
  });

  export default StudentValidationSchema;
 