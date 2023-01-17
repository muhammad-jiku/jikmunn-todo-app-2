import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import TodoList from './Components/Todos/TodoList';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="flex flex-col m-5 justify-center">
      <Suspense fallback={<p className="text-red-800">reloading todos..</p>}>
        <h1 className="text-3xl font-bold">Loading Todos</h1>
        <div className="flex space-x-2">
          <TodoList />
        </div>
      </Suspense>

      <Suspense
        fallback={<p className="text-green-800">reloading more todos..</p>}
      >
        <h1 className="text-xl font-extrabold">Loading more todos</h1>
        <div className="flex space-x-2">
          <TodoList />
        </div>
      </Suspense>
    </div>
  );
}
