"use client"

import {createContext,useContext} from 'react'

 export const TareasContexto= createContext();

export const useTareas =()=>{
    const context = useContext (TareasContexto)
    if (!context) throw new Error ('useTareas tiene que tener un provedor para que sea utilizado')
    return context
}

 export const TareasProvedor =({children})=>{
    const tareas=[1,2,3];

    return <TareasContexto.Provider value={{
        tareas,
        }}>
            {children}
    </TareasContexto.Provider>

}