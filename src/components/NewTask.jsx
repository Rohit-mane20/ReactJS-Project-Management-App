import {useState} from 'react'

export default function NewTask({onAdd}){
    const [enteredTask, setEnteredTask]  = useState('')
    function handleChange(taskName){
        setEnteredTask(taskName)
    }

    function handleClick(){
        if(enteredTask.trim() === ''){
            return
        }
        onAdd(enteredTask)
        setEnteredTask('')
    }
    
    return(
        <div className="flex items-center gap-4">
            <input value={enteredTask} onChange={(event)=> handleChange(event.target.value)} type="text" name="" id="" className="w-64 px-2 py-1 rounded-sm bg-stone-200"  />
            <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    )
}