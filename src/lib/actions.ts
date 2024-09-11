'use server';

import { HydratedDocument } from 'mongoose';
import { z } from 'zod';
import UserModel, { IUser } from '@/models/userModel';
import { revalidatePath } from 'next/cache';

// Example of a form schema created with zod
// const FormSchema = z.object({
//   id: z.string(),
//   customerId: z.string({
//     invalid_type_error: 'Please select a customer.',
//   }),
//   amount: z.coerce
//     .number()
//     .gt(0, { message: 'Please enter an amount greater than $0.' }),
//   status: z.enum(['pending', 'paid'], {
//     invalid_type_error: 'Please select an invoice status.',
//   }),
//   date: z.string(),
// });

const CreateUserSchema = z.object({
  telegramId: z.coerce
    .number()
    .gt(0, { message: 'Please enter a number greater than 0.' }),
});

const createUser = async (formData: FormData) => {
  const validatedFields = CreateUserSchema.safeParse({
    telegramId: formData.get('telegramId'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  const { telegramId } = validatedFields.data;

  try {
    const newUser: HydratedDocument<IUser> = new UserModel({ telegramId });
    await newUser.save();
  } catch (e: unknown) {
    console.error(e);
    return {
      errorMsg: 'Database Error: Failed to Create User.',
    };
  }

  revalidatePath('/');
};

export { createUser };
