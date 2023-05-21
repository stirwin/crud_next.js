'use client';
import { useRouter } from "next/navigation"
//router para redirecionamiento

export const TareaCard =({tarea_prop}) => {
    const router = useRouter();
    
    return(
        <div   onClick={() => router.push(`/edit/${tarea_prop.id}`)}>
            
        <h1>{tarea_prop.title}</h1>
        <p>{tarea_prop.descripcion}</p>
        
        <button>eliminar xd</button>
        
      </div>
    )
}