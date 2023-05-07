"use client"
import { useTareas } from "@/context/TasksContext"

function abouts() {

  const values = useTareas();
  console.log(values.tareas)
  return (
    <div>abouts</div>
  )
}

export default abouts