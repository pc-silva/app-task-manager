import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";

import { ArrowLeft, ChevronIcon, LoaderIcon, TrashIcon } from "../assets/icons";
import { Button } from "../components/Button";
import { Input } from "../components/Inputs";
import { Sidebar } from "../components/Sidebar";
import { TimeSelect } from "../components/TimeSelect";

export function TaskDetailsPage() {
  const [tasks, setTasks] = useState();

  const { taskId } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    async function taskFetch() {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "GET",
      });
      const data = await response.json();
      setTasks(data);
      reset(data);
    }
    taskFetch();
  }, [taskId, reset]);

  function handleClickBack() {
    console.log("Chamou");

    navigate(-1);
  }

  async function handleSaveClick(data) {
    const response = await fetch(`http://localhost:3000/tasks/${tasks.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: data.title.trim(),
        description: data.description.trim(),
        time: data.time,
      }),
    });
    if (!response.ok) {
      return toast.error("Erro ao adicionar tarefa, tente novamente!");
    }

    const newTask = await response.json();
    setTasks(newTask);
    toast.success("Tarefa salva com sucesso!");
    handleClickBack();
  }

  async function handleDeleteTask() {
    const response = await fetch(`http://localhost:3000/tasks/${tasks.id}`, {
      method: "DELETE",
    });
    setTasks(response.json());
    toast.error("Tarefa deletada com sucesso!");
    handleClickBack();
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
          <Button onClick={handleDeleteTask} color="tertiary" className="h-fit">
            <TrashIcon />
            Deletar tarefa
          </Button>
        </div>
        <form onSubmit={handleSubmit(handleSaveClick)}>
          <div className="bg-brand-white space-y-6 rounded-[10px] p-6 text-sm">
            <div>
              <Input
                id="name"
                label="Nome"
                {...register("title", {
                  required: "O título é obrigatório!",
                  validate: (value) => {
                    if (!value.trim()) {
                      return "O campo nome é obrigatório!";
                    }
                    return true;
                  },
                })}
                errorMessage={errors?.title?.message}
              />
            </div>
            <div>
              <TimeSelect
                {...register("time", {
                  required: "O horário é obrigatório!",
                  validate: (value) => {
                    if (!value.trim()) {
                      return "O campo horário é obrigatório!";
                    }
                    return true;
                  },
                })}
                errormessage={errors?.time?.message}
              />
            </div>
            <div>
              <Input
                id="description"
                label="Descrição"
                {...register("description", {
                  required: "A descrição é obrigatória!",
                  validate: (value) => {
                    if (!value.trim()) {
                      return "O campo descrição é obrigatório!";
                    }
                    return true;
                  },
                })}
                errorMessage={errors?.description?.message}
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button
              className="h-9 w-17.5"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? (
                <LoaderIcon className="animate-spin" />
              ) : (
                "Salvar"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
