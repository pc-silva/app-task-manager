import { Button } from "./Button";
import AddIcon from "../assets/icons/add.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import CloudSunIcon from "../assets/icons/cloudSun.svg?react";
import { TaskSeparator } from "./TaskSeparator";

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

      <div className="mt-6 rounded-[2.5px] bg-white p-6">
        <div className="space-y-3">
          <TaskSeparator title="Manhã" icon={<SunIcon />} />
        </div>

        <div className="my-6 space-y-3">
          <TaskSeparator title="Tarde" icon={<CloudSunIcon />} />
        </div>

        <div className="space-y-3">
          <TaskSeparator title="Noite" icon={<MoonIcon />} />
        </div>
      </div>
    </div>
  );
};
