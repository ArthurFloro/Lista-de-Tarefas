import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList(){
    const [tarefas, setTarefas] = useState([
        {
            id: 1,
            texto: "Consulta médica",
            completado: true
        },

        {
            id: 2,
            texto: "Encontro na escola", 
            completado: false
        }
    ]);

    const [texto, setTexto] = useState('');
    function addTarefa(texto){
        const newTarefa = {
            id: Date.now(),
            texto,
            completado: false
        };
        setTarefas([...tarefas, newTarefa]);
        setTexto('');
    };
    function deletarTarefa(id){
        setTarefas(tarefas.filter(tarefas => tarefas.id !== id))
    }
    function alternarCompletado(id){
        setTarefas(tarefas.map(tarefa => {
            if (tarefa.id === id) {
                return {...tarefa, completado: !tarefa.completado};
            } else {
                return tarefa;
            }
        }))
    }
    return(
        <div className="bg-white px-4 py-8 rounded-lg">
            {tarefas.map(tarefa => (
                <TodoItem
                key = {tarefa.id}
                tarefa = {tarefa}
                deletarTarefa = {deletarTarefa}
                alternarCompletado = {alternarCompletado}
                />
            ))}
            <input className="border border-black px-2 rounded-lg" value={texto} onChange={e => setTexto(e.target.value)}
            placeholder="Insira sua nova Tarefa" />
            <button className="border-none bg-blue-500 px-2 py-0 rounded-lg hover:cursor-pointer hover:bg-blue-700
             ml-2 text-white" 
            onClick={() => addTarefa(texto)}>Adicionar </button>
        </div>
    )
}