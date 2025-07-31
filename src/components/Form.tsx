import { useState } from "react"
import { categories } from "../data/categorias"

export default function Form() {

const [activity, setActivity ] = useState({
  category: 1,
  actividad: '',
  calorias: 0
})

const onChangeProcesa = (e) => {
  console.log(e.target.value)
}

  return (
    <div>
      <form className="space-y-5 bg-white shadow p-10 rounded-lg">
        {/* CAMPO DE LAS CATEGORIAS  */}
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="categoriaId" className="font-bold">Categorias</label>
          <select name="" 
              id="categoriaId" 
              value={activity.calorias}
              onChange={onChangeProcesa}
              className="border border-slate-300 p-2 rounded-lg w-full bg-white" >
            {
              categories.map(items => (
                <option value="" key={items.id} >
                  {items.name}
                </option>
              ))
            }
          </select>
        </div>
        {/* CAMPO DE LAS ACTIVIDADES  */}
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="actividadId" className="font-bold">Actividad</label>
          <input type="text"
            id="actividadId"
            value={activity.actividad}
            onChange={onChangeProcesa}
            className="border border-slate-300 rounded-lg p-2" 
            placeholder="Ej. comida, ensaladas, jugo de naranjas, ejercicios, pesas, etc.."
          />
        </div>
        {/* CAMPO DE LAS CALORIAS */}
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="caloriasId" className="font-bold">Calorias</label>
          <input type="number"
            id="caloriasId"
            onChange={onChangeProcesa}
            value={activity.calorias}
            className="border border-slate-300 rounded-lg p-2" 
            placeholder="Ej. 200 o 500."
          />
        </div>
         {/* BOTON DE SUBMIT */}
         <input 
              type="submit" 
              className="bg-gray-600  hover:bg-gray-900 w-full p-2 text-white font-bold uppercase cursor-pointer "
              value={'Guardar Comida o Ejercicio'}
         />
      </form>
    </div>
  )
}
