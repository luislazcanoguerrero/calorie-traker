import { categories } from "../data/categorias"
console.log(categories)

export default function Form() {
  return (
    <div>

      <form className="space-y-5 bg-white shadow p-10 rounded-lg">

        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="categoriaId" className="font-bold">Categorias</label>
          <select name="" id="categoriaId" className="border border-slate-300 p-2 rounded-lg w-full bg-white" >
            {
              categories.map(items => (
                <option value="" key={items.id} >
                  {items.name}
                </option>
              ))

            }

          </select>

        </div>

      </form>


    </div>
  )
}
