type todoprops = {
    id : string,
    title : string,
    complete : boolean
}

export default function Todoitem({id,title,complete} : todoprops){
    return <div className="flex gap-1 ">
        <input type="checkbox" id={id} className="cursor-pointer peer" />
        <label htmlFor={id} className="peer-checked:line-through peer-checked:text-slate-500">{title}</label>
    </div>
}