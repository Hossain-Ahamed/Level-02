import { model, Schema } from 'mongoose';
import { TUser, UserModel } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';
const userSchema = new Schema<TUser, UserModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// Pre save middleware / hook : will work on create() save()
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  //hasing pass and save
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});

//post middleware /hook
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

userSchema.statics.isUserExistsByCustomId = async function(id : string){
   return await User.findOne({id});
}
userSchema.statics.isPasswordMatched = async function(plainTextPassword:string,hashPassword : string){
  return await bcrypt.compare(plainTextPassword, hashPassword);
}
export const User = model<TUser, UserModel>('User', userSchema);
