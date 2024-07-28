import { model,Schema,  } from "mongoose";
import { Tcourse, TPreRequisiteCourse } from "./course.interface";

const preRequisiteCoursesSchema = new Schema<TPreRequisiteCourse>({
	course : {
		type: Schema.Types.ObjectId,
		ref : 'Course',
	},
	isDeleted : {
		type : Boolean,
		default : false
	}
})
const courseSchema = new Schema<Tcourse>({
	  title : {
		type: String,
		required : [true,"Title is required"],
		trim : true,
		unique : true
	  },
	  prefix : {
		type: String,
		required : [true,"Prefix is required"],
		trim : true,
	  },
	  code : {
		type: Number,
		required : [true,"Code is required"],
		trim : true,
	  },
	  credits : {
		type : Number,
		trim : true,
		required : true
	  },

	  preRequisiteCourses : [preRequisiteCoursesSchema],
	  isDeleted : {
		type : Boolean,
		default : false
	  }
})

export const CourseModel =  model<Tcourse>('Course',courseSchema)