import Image from "next/image";
import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My React App</h1>
        <p className="text-gray-600">
          This is a modern React application built with Next.js and Tailwind CSS.
        </p>
      </div>
      <TodoList />
    </div>
  );
}
