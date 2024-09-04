1. Mongoose

### Introduction to Mongoose

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model application data, enabling efficient interaction with MongoDB.

### Key Points

1. **Schema-Based Modeling**: Enforces structure and consistency on MongoDB documents.
2. **Data Validation**: Ensures data meets specific criteria before saving.
3. **Middleware Support**: Pre and post hooks for operations like validation and logging.
4. **Type Casting**: Automatically casts data to defined schema types.
5. **Relationships**: Manages relationships between data models with ease.
6. **Query API**: Powerful API for complex queries and updates.
7. **Plugins**: Extends functionality with community and custom plugins.

Mongoose simplifies data management in Node.js applications, providing a robust and flexible interface to work with MongoDB.

Interface -> Schema -> Model -> DB Query

---

**Table of Contents**

- [Validation](#validation)
  - [required message](#required-message)
  - [enum message](#enum-message)
  - [unique field](#unique-field)
  - [Custom Validation](#custom-validation)
  - [validator for ts mongoose](#validator-for-ts-mongoose)
    - [`validator` 9-3 student.model](#validator-9-3-studentmodel)
    - [`Joi` 9-4 student.validation](#joi-9-4-studentvalidation)
    - [Zod 9-5](#zod-9-5)
- [Instance 9-6 see documentation and code `first project`](#instance-9-6-see-documentation-and-code-first-project)
  - [Instance of static instance `See code + doc` + 9-7](#instance-of-static-instance-see-code--doc--9-7)
- [Middle ware pre and post `save` 9-8 `student.model.ts`](#middle-ware-pre-and-post-save-9-8-studentmodelts)
  - [query 9-10 `student.model.ts`](#query-9-10-studentmodelts)
- [Virtuals](#virtuals)
- [Update](#update)
  - [Update non primitive field 13-12](#update-non-primitive-field-13-12)
  - [Update \& Pull from array of object `15-7` + `update course`](#update--pull-from-array-of-object-15-7--update-course)
  - [Unique update to array using `Add to set` 15-8](#unique-update-to-array-using-add-to-set-15-8)
- [Populate](#populate)
- [Query](#query)
  - [Filtering](#filtering)
  - [Skip](#skip)
  - [limit](#limit)
- [Transaction and Rollback 13-9 user.service.ts -\> create student](#transaction-and-rollback-13-9-userservicets---create-student)

# Validation

## required message

```bash
FirstName: {
    type: String,
    required: [true, 'First name can\'t be blank'],
    trim:true, //remove space
    maxlength: [20,"name cant be greater than 20 character"]
  },

```

## enum message

```ts
 gender: {
    type : String,
    enum : {
      values : ['male', 'female', 'others'], 
        message : '{VALUE} is not valid'
    }
  },
```

## unique field

```ts
  id: { type: String, required: true, unique: true },
```

```ts

```

## Custom Validation

```ts
firstName: {
    type: String,
    required: [true, 'First name can\'t be blank'],
    trim:true, //remove space
    maxlength: [20,"name cant be greater than 20 character"],
    validate: {
      validator : function (value : string){
        return value ===value.charAt(0).toUpperCase()+value.slice(1);
      },
      message: '{VALUE} is not in capitalize format'
    }
  }
```

## validator for ts mongoose

### `validator` 9-3 student.model

Validator is used in mongoose model to create validation , it helps to write short keyword to validate instead of writing own validation code

```bash
npm i validator
```

for ts isntall as dev dependecy

```
npm i -D @types/validator
```

[Documentation Validator](https://github.com/validatorjs/validator.js)

```ts
 lastName: {
    type: String,
    required: [true, 'Last name can\'t be blank'],
    validate : {
      validator : (value:string)=>validator.isAlpha(value),
      message : "{VALUE} is not valid"
    }
  },
```

### `Joi` 9-4 student.validation

```bash
npm joi
```

[Documentation Joi](https://joi.dev/api/?v=17.13.0)

Create schema in controller
and validate

```ts
const JoiStudentSchema = Joi.object({
      id: Joi.string().required(),
      name: NameSchema.required(),
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
      guardian: GuardianSchema.required(),
      localGuardian: LocalGuardianSchema.required(),
      profileImg: Joi.string(),
      isActive: Joi.string().valid('active', 'blocked').required(),
    });

    const {error,value} = JoiStudentSchema.validate(studentData);
```

### Zod 9-5

```bash
npm install zod
```

9-5

# Instance 9-6 see documentation and code `first project`

```ts
export type TStudentMethods = {
  isUserExists(id: string): Promise<TStudent |null>;
};

// Create a new Model type that knows about IUserMethods...
export type TStudentModel = Model<
  TStudent,
  Record<string, never>,
  TStudentMethods
>;
```

### Instance of static instance `See code + doc` + 9-7

```ts
//creating a custom static  method
studentSchema.statics.isUserExists = async function(id:string) {
  const existingUser = await Student.findOne({id});
  return existingUser;
}
```

# Middle ware pre and post `save` 9-8 `student.model.ts`

```ts
AcademicDepartmentSchema.pre('save',async function (next) {
 console.log(this) //this will return document for save type keyword
 next();
})

AcademicDepartmentSchema.pre('findOneAndUpdate',async function (next) {
 console.log(this) //this will return query type thing this.getQuery() //for query type 
 next();
})
AcademicDepartmentSchema.post('save',async function (doc,next) {
 console.log(doc); //doc will return document for eeverytype of query
 next();
})

```

pre hook has access of document

use for password hash

```ts
// Pre save middleware / hook : will work on create() save()
studentSchema.pre('save', async function(next) {
  const user = this;
  //hasing pass and save
 user.password= await bcrypt.hash(user.password,Number(config.bcrypt_salt_round));

 next();
})

//post middleware /hook
studentSchema.post('save',function(doc,next){
  doc.password = '';
  next()
})
```

### query 9-10 `student.model.ts`

```ts
studentSchema.pre('findOne',async function(next) {
  this.find({isDeleted :{$ne: true}});
  next();
})
```

- using aggregation

```ts
studentSchema.pre('aggregate',async function(next) {
  this.pipeline().unshift({$match : {isDeleted : {$ne : false}}})
  next();
})
```

-generalize

```ts
studentSchema.pre(/^find/,async function (next) {
  
})
```

# Virtuals

To derive data from existing data

1. Turn on Virtual
2. Use vurtual function

```ts
const studentSchema = new Schema<TStudent, TStudentModel>({
  id: { type: String, required: true, unique: true },
},
{
  toJSON : {
    virtuals : true,
  }
});

studentSchema.virtual('fullName').get(function(){
  return `${this.name.firstName} ${this.name.middleName || ""} ${this.name.lastName}`;
})
```

# Update

```ts
  const result = await Student.updateOne({id},{
    isDeleted: true
  })

```

## Update non primitive field 13-12

Recieved :

```bash
"name": {
  "lastName": "Ahamed"
}
  
```

- falttenoject will make like `name.lastname : 'ahamed'`

```ts
const flattenNestedObject = (prefix:string, nestedObject: Record<string, unknown>) => {
  const flatObject : Record<string, unknown> = {};
  for (const [key, value] of Object.entries(nestedObject)) {
    flatObject[`${prefix}.${key}`] = value;
  }
  return flatObject;
};
```

## Pull from array of object `15-7` + `update course`

| To pull from an array | add to array  use |
| :-------------------: | ----------------- |
|        ``in``        | ``each``          |

```ts
await CourseModel.findByIdAndUpdate(id,{
    $pull : { Array_Name : { Field_Name_in_that_array : {$in : _Array_of_those_matched_String }}}
   }
```

```ts
await CourseModel.findByIdAndUpdate(id,
   {
    $pull : {
     preRequisiteCourses : { course : {$in : deletedPrerequisites }}
    }
   }
```

```ts
const updateStudentIntoDB = async (id: string, payload : Partial<TStudent>) => {
  const { name, ...remainingStudentData } = payload;
  const modifiedData_ForDB : Record<string, unknown> = { ...remainingStudentData };

  if (name && Object.keys(name).length) {
    Object.assign(modifiedData_ForDB, flattenNestedObject('name', name));
  }

  const result = await Student.findOneAndUpdate({ id }, modifiedData_ForDB, { new: true });

  return result;
};

```

## Unique update to array using `Add to set` 15-8

* `$addtoset` is used to add unique in array

```ts
const newPrerequisiteCourses = await CourseModel.findByIdAndUpdate(id,
	{
		$addToSet: {
			preRequisiteCourses: { $each: newPrerequisiteCourse }
		}
	}
)
```

---

> **NB:** using `$each` & `$addtoset` cant check properly.  `coruse update course.service.ts `
>
> - As it was an `array of object` . `_id` was created in each object, so **turning it off will solve this issue**

```ts
const preRequisiteCoursesSchema = new Schema<TPreRequisiteCourse>({
	course: {
		type: Schema.Types.ObjectId,
		ref: 'Course',
	},
	isDeleted: {
		type: Boolean,
		default: false
	}
}, {
	_id: false,
	timestamps: true,
})
```

# Populate

 to polulate inside there will be the variable of the field to be added to get the data | $each |

- For child populate `.populate(path : 'parent_Var', populate : {path : 'child_ref_Name'})`

```ts
 const result = await Student.find()
  .populate('admissionSemester')
  .populate('academicDepartment')
  .populate({
  path : 'academicDepartment',
  populate : {
    path : 'AcademicFaculty'
  }
  });
```

# Query

 video 14-9

## Filtering

- `Fieldname` to see only that field
- `-fieldName` to remove

```ts
.select('fieldName')
```

## Skip

Not to send the document. ie: Not sending the first 10 doc

```ts
.skip(10)
```

## limit

limiting the document find size ie : 10 document max

```ts
.limit(10)
```

# Transaction and Rollback 13-9 user.service.ts -> create student

 START SESSION→ COMMI/ABORT →END SESSION

- create

```ts
  //create session 
  const session = await mongoose.startSession();
  try {
    // trasnsaction 1
    const newUser = await User.create([userData], { session });
    if (!newUser.length) { 
      // throw error
    }
    //completed -->end
    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (error) {
    //session error
    await session.abortTransaction();
    await session.endSession();
  }
```

- update 13- 10 delete

```ts
const result = await Student.findOneAndUpdate(
      {id},
      {isDeleted: true},
      {new: true,session}
    )
```
