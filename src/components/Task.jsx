import { Button } from "./Button";
import AddIcon from "../assets/icons/add.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import CloudSunIcon from "../assets/icons/cloudSun.svg?react";
import { TaskSeparator } from "./TaskSeparator";
import { useState } from "react";
import { TASKS } from "./constants/TASKS";
import { TaskItens } from "./TaskItens";

export const Task = () => {
  const [tasks, setTasks] = useState(TASKS);

  const morningTasks = tasks.filter((task) => task.time === "morning");
  const afternoonTasks = tasks.filter((task) => task.time === "afternoon");
  const eveningTasks = tasks.filter((task) => task.time === "evening");

  function handleStatusChange(taskId) {
    const updatedTasks = tasks.map((task) => {
      if (task.id !== taskId) return task;

      if (task.status === "done") return { ...task, status: "not_started" };
      if (task.status === "not_started")
        return { ...task, status: "in_progress" };
      if (task.status === "in_progress") return { ...task, status: "done" };

      return task;
    });
    setTasks(updatedTasks);
  }

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
          {/* Manhã */}
          {morningTasks.map((task) => (
            <TaskItens
              key={task.id}
              task={task}
              handleStatusChange={handleStatusChange}
            />
          ))}
        </div>

        <div className="my-6 space-y-3">
          <TaskSeparator title="Tarde" icon={<CloudSunIcon />} />
          {/* Tarde */}
          {afternoonTasks.map((task) => (
            <TaskItens
              key={task.id}
              task={task}
              handleStatusChange={handleStatusChange}
            />
          ))}
        </div>

        <div className="space-y-3">
          <TaskSeparator title="Noite" icon={<MoonIcon />} />
          {/* Noite */}
          {eveningTasks.map((task) => (
            <TaskItens
              key={task.id}
              task={task}
              handleStatusChange={handleStatusChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
