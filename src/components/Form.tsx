import { useState } from "react"
import { categories } from "../data/categorias"

export default function Form() {

const [activity, setActivity ] = useState({
  category: 1,
  name: '',
  calories: 0
})


const onChangeProcesa = (e) => {

  setActivity({
    ...activity,
    [e.target.id] : e.target.value
  })

}

  return (
    <div>
      <form className="space-y-5 bg-white shadow p-10 rounded-lg">
        {/* CAMPO DE LAS CATEGORIAS  */}
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="category" className="font-bold">Categorias</label>
          <select 
              className="border border-slate-300 p-2 rounded-lg w-full bg-white"
              id="category" 
              value={activity.category}
              onChange={onChangeProcesa}>
            {
              categories.map(category => (
                <option value={category.id} key={category.id} >
                  {category.name}
                </option>
              ))
            }
          </select>
        </div>
        {/* CAMPO DE LAS ACTIVIDADES  */}
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="actividadId" className="font-bold">Actividad</label>
          <input type="text"
            id="name"
            value={activity.name}
            onChange={onChangeProcesa}
            className="border border-slate-300 rounded-lg p-2" 
            placeholder="Ej. comida, ensaladas, jugo de naranjas, ejercicios, pesas, etc.."
          />
        </div>
        {/* CAMPO DE LAS CALORIAS */}
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="caloriasId" className="font-bold">Calorias</label>
          <input type="number"
            id="calories"
            onChange={onChangeProcesa}
            value={activity.calories}
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
