
import Image from "next/image";
import Link from "next/link";
import { prisma } from "./db";
import Todoitem from "./components/Todoitem";

export default async function Home() {
  const todos = await prisma.todo.findMany();
  //await prisma.todo.create({data : { title : "test",complete : false}})
  return (
    <div>
      <header className="flex justify-between">
        <h1 className="text-3xl">Todos</h1>
        <Link className="border border-slate-50 px-2 py-1 rounded-md hover:bg-black" href="/new">New</Link>
      </header>
      <ul>
        {todos.map(todo=> (
          <Todoitem key = {todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}
