"use client"
import { TareaCard } from "@/components/TareasCard";
import { useTareas } from "@/context/TasksContext"


function page() {
 
 const {tareas}=useTareas();
 console.log(tareas);
 
 
 
  return (
    <div>
      {tareas.map((tarea)=>(
       <TareaCard tarea_prop={tarea} key={tarea.id}/>
      ))}

    </div>
  )
}

export default page