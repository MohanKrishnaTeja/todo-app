import Link from "next/link";
import { prisma } from "../db";

async function createTodo(data : FormData){
    "use server"
   const title = data.get("title")?.valueOf();
   if(typeof title != "string" || title === ""){
     throw new Error("invalid title")
   }
   await prisma.todo.create({data : { title ,complete:false}})
}

export default function page() {
    return <div>
        <header>
            <h1 className="text-3xl">New</h1>
        </header>
        <form action={createTodo} className="flex flex-col">
            <input type="text" name="title" className="border border-slate-50 px-2 py-1 bg-slate-900 rounded-md hover:bg-black" />
            <div className="flex justify-end gap-1 py-3">
                <Link href= ".." className="border border-slate-50 px-2 py-1 bg-slate-900 rounded-md hover:bg-black">Cancel</Link>
                <button className="border border-slate-50 px-2 py-1 bg-slate-900 rounded-md hover:bg-black" >submit</button>
            </div>
        </form>
    </div>
}