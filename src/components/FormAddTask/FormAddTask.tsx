import { zodResolver } from "@hookform/resolvers/zod";
import { Form, Input, ValidateMessage} from "./styles"; // Adicionei um componente ErrorMsg
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { Toast } from 'primereact/toast';
import { useRef } from "react";
interface Props {
  createTask: (content: string) => void;
}

const newTaskFormValidation = zod.object({
  taskContent: zod.string().min(1, 'Informe a tarefa'),
});

type newTaskFormData = zod.infer<typeof newTaskFormValidation>;

export function FormAddTask({ createTask }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: {errors}
  } = useForm<newTaskFormData>({
    defaultValues: {
      taskContent: ''
    },
    resolver: zodResolver(newTaskFormValidation) 
  });
  const toast = useRef<Toast>(null);

  const show = () => {
    if (toast.current) {
      toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Tarefa crida. =)', life:1500 });
    }
  };
  function handleCreateNewTask() {
    createTask(watch("taskContent"));
    reset();
    show();
  }


  return (
    <Form onSubmit={handleSubmit(handleCreateNewTask)} >
      <Input validate={!!errors.taskContent}
        placeholder="Escreva suas tarefas...e adicione com um Enter!"
        {...register("taskContent")}
      />
      <Toast  ref={toast} position="bottom-center" className="toast" />
      {errors.taskContent ? <ValidateMessage><h1>{errors.taskContent.message}</h1></ValidateMessage> : ""}
    </Form>
    
  );
}
