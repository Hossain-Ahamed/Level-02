# Mongoose

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

## instance 9-6 see documenttation and code `first project`

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

### instance of static instance `code + doc` + 9-7

## middle ware

### pre and post `save` 9-8 `student.model.ts`

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
## To update non primitive field 13-12
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

# Populate

 to polulate inside there will be the variable of the field to be added to get the data

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
