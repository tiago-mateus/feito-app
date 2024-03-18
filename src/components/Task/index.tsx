import { Trash } from "@phosphor-icons/react";
import { StyledTask, Section, Button, LabelCheck, SpanCheck } from "./styles";
import { ITask } from "../../App";

interface Props {
    data: ITask,
    checkChange: (id: string) => void
    deleteTask: (id:string) => void
}

export function Task({data, checkChange, deleteTask}:Props) {
    return (
    <StyledTask>
        <Section checked={data.isCompleted}>
            <LabelCheck >
                <input type="checkbox" onChange={()=>{checkChange(data.id)}}/>
                <SpanCheck></SpanCheck>
            </LabelCheck>
            <p>{data.content}</p>
            <Button onClick={()=>{deleteTask(data.id)}}><Trash size={25}/></Button>
        </Section>
        <hr />
    </StyledTask>
    );
}