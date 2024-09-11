import { createUser } from '@/lib/actions';

export default async function Home() {
  return (
    <main className={'flex flex-col items-center justify-center p-6 text-white'}>
      <h1 className={'font-bold'}>Test Form Should Create DB Document</h1>

      <form
        className={'mt-6 flex flex-col items-center justify-center'}
        action={createUser}
      >
        <div className={'flex flex-col'}>
          <label>Enter Telegram ID number</label>
          <input className={'text-black'} name={'telegramId'} type={'text'} />
        </div>
        <button
          className={'mt-4 rounded border-1 bg-blue-400 p-1 hover:bg-blue-300'}
          type={'submit'}
        >
          Submit
        </button>
      </form>
    </main>
  );
}
