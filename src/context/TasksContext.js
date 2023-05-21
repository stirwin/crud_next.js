"use client"
//exportamos las librerias para tener contexto de los datos que se van a compartir
import {createContext,useContext} from 'react'

//se crea la constante que va a tener todo el contexto
export const TareasContexto= createContext();


//se verifica si el contexto esta sirviendo o no glovalizandolo
export const useTareas =()=>{
    const context = useContext (TareasContexto)
    if (!context) throw new Error ('useTareas tiene que tener un provedor para que sea utilizado')
    return context
}


//json en el cual se utilizaran los datos de la tarea
 export const TareasProvedor =({children})=>{
    const tareas=[{
        id: 1,
        title: "mi primera tarea",
        descripcion:"una descripcion aqui pa que tin"
    },
    {
        id: 2,
        title: "mi tercera tarea",
        descripcion:"una descripcion aqui pa que tin"
    },{
        id: 3,
        title: "mi tercera tarea",
        descripcion:"una descripcion aqui pa que tin"
    }];

    return <TareasContexto.Provider value={{tareas,}}>
            {children}
    </TareasContexto.Provider>

}