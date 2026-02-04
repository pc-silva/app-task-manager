import { useEffect, useState } from "react";
import { toast } from "sonner";

import AddIcon from "../assets/icons/add.svg?react";
import CloudSunIcon from "../assets/icons/cloudSun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import { AddTaskDialog } from "./AddTaskDialog";
import { Button } from "./Button";
import { TaskItens } from "./TaskItens";
import { TaskSeparator } from "./TaskSeparator";

export const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [addTaskDialogIsOpen, setAddTaskDialogIsOpen] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "GET",
      });
      const tasks = await response.json();
      setTasks(tasks);
    };
    fetchTasks();
  }, []);

  const morningTasks = tasks.filter((task) => task.time === "morning");
  const afternoonTasks = tasks.filter((task) => task.time === "afternoon");
  const eveningTasks = tasks.filter((task) => task.time === "evening");

  function handleStatusChange(taskId) {
    const updatedTasks = tasks.map((task) => {
      if (task.id !== taskId) return task;

      if (task.status === "done") {
        toast.success("Tarefa marcada como não iniciada!");
        return { ...task, status: "not_started" };
      }

      if (task.status === "not_started") {
        toast.success("Tarefa em progresso!");
        return { ...task, status: "in_progress" };
      }

      if (task.status === "in_progress") {
        toast.success("Tarefa concluída!");
        return { ...task, status: "done" };
      }

      return task;
    });
    setTasks(updatedTasks);
  }

  function handleDeleteTask(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    toast.success("Tarefa deletada com sucesso!");
  }

  function onTaskSubmit(newTask) {
    setTasks([...tasks, newTask]);
    toast.success("Tarefa adicionada com sucesso!");
  }

  return (
    <div className="w-full px-8.5 pt-17.5 text-xs font-semibold">
      <div className="flex items-end justify-between">
        <div>
          <span className="text-brand-primary">Minhas Tarefas</span>
          <h1 className="text-brand-darkBlue mt-1.5 text-xl">Minhas Tarefas</h1>
        </div>
        <div className="flex gap-2">
          <Button color="ghost">
            Limpar tarefas <TrashIcon />
          </Button>
          <Button onClick={() => setAddTaskDialogIsOpen(true)}>
            Nova tarefa <AddIcon />
          </Button>
          <AddTaskDialog
            isOpen={addTaskDialogIsOpen}
            handleClose={() => setAddTaskDialogIsOpen(false)}
            onSubmitSuccess={onTaskSubmit}
          />
        </div>
      </div>

      <div className="bg-brand-white mt-6 rounded-[2.5px] p-6">
        <div className="space-y-3">
          <TaskSeparator title="Manhã" icon={<SunIcon />} />
          {morningTasks.map((task) => (
            <TaskItens
              key={task.id}
              task={task}
              handleStatusChange={handleStatusChange}
              onDeleteTask={handleDeleteTask}
            />
          ))}
        </div>

        <div className="my-6 space-y-3">
          <TaskSeparator title="Tarde" icon={<CloudSunIcon />} />
          {afternoonTasks.map((task) => (
            <TaskItens
              key={task.id}
              task={task}
              handleStatusChange={handleStatusChange}
              onDeleteTask={handleDeleteTask}
            />
          ))}
        </div>

        <div className="space-y-3">
          <TaskSeparator title="Noite" icon={<MoonIcon />} />
          {eveningTasks.map((task) => (
            <TaskItens
              key={task.id}
              task={task}
              handleStatusChange={handleStatusChange}
              onDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
