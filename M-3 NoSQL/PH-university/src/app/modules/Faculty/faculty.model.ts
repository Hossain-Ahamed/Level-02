import { model, Schema } from 'mongoose';
import { TFaculty, TFacultyModel, TFacultyUserName } from './faculty.interface';
import { BloodGroup, Gender } from './faculty.constant';
import AppError from '../../errors/AppError';

const userNameSchema = new Schema<TFacultyUserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
});

const facultySchema = new Schema<TFaculty, TFacultyModel>(
  {
    id: {
      type: String,
      required: [true, 'ID is required'],
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User id is required'],
      unique: true,
      ref: 'User',
    },
    designation: {
      type: String,
      required: [true, 'Designation is required'],
    },
    name: {
      type: userNameSchema,
      required: [true, 'Name is required'],
    },
    gender: {
      type: String,
      enum: {
        values: Gender,
        message: '{VALUE} is not a valid gender',
      },
      required: [true, 'Gender is required'],
    },
    dateOfBirth: { type: Date },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    contactNo: { type: String, required: [true, 'Contact number is required'] },
    emergencyContactNo: {
      type: String,
      required: [true, 'Emergency contact number is required'],
    },
    bloodgGroup: {
      type: String,
      enum: {
        values: BloodGroup,
        message: '{VALUE} is not a valid blood group',
      },
    },
    presentAddress: {
      type: String,
      required: [true, 'Present address is required'],
    },
    permanentAddress: {
      type: String,
      required: [true, 'Permanent address is required'],
    },
    profileImg: { type: String },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      required: [true, 'AcademicDepartment id is required'],
      ref: 'AcademicDepartment',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

facultySchema.pre('find', async function (next) {
  this.find({ isDeleted: { $ne: false } });
  next();
});

facultySchema.pre('findOne', async function (next) {
  this.find({ isDeleted: { $ne: false } });
  next();
});

facultySchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

facultySchema.virtual('fullName').get(function () {
  return `${this?.name?.firstName} ${this?.name?.middleName || ''} ${this?.name?.lastName}`;
});

facultySchema.statics.isUserExists = async function (id: string) {
  const existingUser = FacultyModel.findOne({ id });
  return existingUser;
};

facultySchema.pre('findOneAndReplace', async function (next) {
  const query = this.getQuery();
  const isExist = await FacultyModel.findOne(query);
  if (!isExist) {
    throw new AppError(404, 'No faculty by this query');
  }
  next();
});

export const FacultyModel = model<TFaculty, TFacultyModel>(
  'Faculty',
  facultySchema,
);