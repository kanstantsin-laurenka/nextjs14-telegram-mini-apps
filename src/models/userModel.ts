import { Document, Schema, model, models } from 'mongoose';

export interface IUser extends Document {
  telegramId: number;
}

const UserSchema = new Schema<IUser>(
  {
    telegramId: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

export default models.User || model<IUser>('User', UserSchema);
