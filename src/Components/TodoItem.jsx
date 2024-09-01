import React from "react"


function TodoItem({tarefa, deletarTarefa, alternarCompletado}){
function handleChange(){
    alternarCompletado(tarefa.id)
}
return(
    <div className=" py-4 flex ">
        <input className="form-checkbox h-4 w-6 flex justify-center items-center border-gray-300 rounded
        " type="checkbox" checked={tarefa.completado} onChange={handleChange} />
        <p className="shadow-md px-3 border  rounded-lg">{tarefa.texto}</p>
        <button className="bg-red-600 hover:cursor-pointer hover:bg-red-800 px-2 py-0 rounded-lg
         text-white ml-56 absolute" onClick={() => deletarTarefa(tarefa.id)}> Deletar</button>
    </div>

)
}
export default TodoItem;    