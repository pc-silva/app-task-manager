import { Button } from "./Button";
import AddIcon from "../assets/icons/add.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";

export const Task = () => {
  return (
    <div className="w-full px-8.5 pt-17.5 text-xs font-semibold">
      <div className="flex items-end justify-between">
        <div>
          <span className="text-[#00ADB5]">Minhas Tarefas</span>
          <h1 className="mt-1.5 text-xl text-[#35383E]">Minhas Tarefas</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">
            Limpar tarefas <TrashIcon />
          </Button>
          <Button variant="primary">
            Nova tarefa <AddIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
