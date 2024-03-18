import { useRef, useState } from 'react'
import './App.css'
import { FormAddTask } from './components/FormAddTask/FormAddTask'
import { Header } from './components/Header/Header'
import { Task } from './components/Task/Task'
import { v4 as uuidv4 } from 'uuid';
import { Toast } from 'primereact/toast'
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog'
import 'primeicons/primeicons.css';
        
export interface ITask {
  id: string,
  content: string,
  isCompleted: boolean
}

function App() {

  const toast = useRef<Toast>(null);
  const [tasks, setTasks] = useState<ITask[]>([]);
  function handleCreateNewTask(value:string){
    setTasks([...tasks,{id:uuidv4(), content:value, isCompleted:false}]);
  }
  function handleCheckChange(idChange:string){
    const taskChanged = tasks.map(task =>task.id === idChange ? {...task,isCompleted: !task.isCompleted}:task);
    setTasks(taskChanged);
  }
  function handleDeleteTask(idDelete: string){
    confirmDialog({
      message: 'Você realmente quer excluir essa tarefa?',
      header: 'Confirmar Exclusão',
      icon: 'pi pi-exclamation-triangle',
      defaultFocus: 'reject',
      acceptClassName: 'p-button-danger',
      acceptLabel:'Sim',
      rejectLabel:'Não',
      position:'top',
      accept: () => accept(idDelete),
      reject
    });
  }

  const accept = (idDelete:string) => {
    const taskUpdate = tasks.filter(({id}) => id !== idDelete);
        setTasks(taskUpdate);
    toast.current?.show({ severity: 'info', summary: 'Confirmado', detail: 'Tarefa excluida', life: 3000 });
}

const reject = () => {
  
}

  return (
    <>
      <Header/>
      <FormAddTask createTask={handleCreateNewTask}/>
      {tasks.map(task => (
        <Task  key={task.id} data={task} checkChange={handleCheckChange} deleteTask={handleDeleteTask}/>
      ))}
      <Toast ref={toast} position="bottom-center"/>
    <ConfirmDialog />
    </>
  )
}

export default App
