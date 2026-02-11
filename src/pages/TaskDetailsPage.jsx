import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { ArrowLeft, ChevronIcon, TrashIcon } from "../assets/icons";
import { Button } from "../components/Button";
import { Input } from "../components/Inputs";
import { Sidebar } from "../components/Sidebar";
import { TimeSelect } from "../components/TimeSelect";

export function TaskDetailsPage() {
  const [tasks, setTasks] = useState();
  const { taskId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function taskFetch() {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "GET",
      });
      const data = await response.json();
      setTasks(data);
    }
    taskFetch();
  }, [taskId]);

  function handleClickBack() {
    navigate(-1);
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full space-y-6 px-8.5 pt-6">
        <div className="flex items-end justify-between">
          <div>
            <button
              onClick={handleClickBack}
              className="bg-brand-primary flex size-8 cursor-pointer items-center justify-center rounded-full"
            >
              {<ArrowLeft />}
            </button>
            <div className="mt-3 mb-1.5 flex items-center gap-1">
              <span className="text-brand-textGray text-xs">
                Minhas Tarefas
              </span>
              <ChevronIcon />
              <span className="text-brand-primary text-xs font-semibold">
                {tasks?.title}
              </span>
            </div>
            <h1 className="text-brand-darkBlue text-xl font-semibold">
              {tasks?.title}
            </h1>
          </div>
          <Button color="tertiary" className="h-fit">
            <TrashIcon />
            Deletar tarefa
          </Button>
        </div>
        <div className="bg-brand-white space-y-6 rounded-[10px] p-6 text-sm">
          <div>
            <Input id="name" label="Nome" value={tasks?.title} />
          </div>
          <div>
            <TimeSelect value={tasks?.time} />
          </div>
          <div>
            <Input
              id="description"
              label="Descrição"
              value={tasks?.description}
            />
          </div>
        </div>
        <div className="flex justify-end gap-2.5">
          <Button color="secondary">Cancelar</Button>
          <Button>Salvar</Button>
        </div>
      </div>
    </div>
  );
}
