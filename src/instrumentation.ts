import dbConnect from '@/lib/dbConnect';

export async function register() {
  await dbConnect();
}
