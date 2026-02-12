import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";

import { ArrowLeft, ChevronIcon, LoaderIcon, TrashIcon } from "../assets/icons";
import { Button } from "../components/Button";
import { Input } from "../components/Inputs";
import { Sidebar } from "../components/Sidebar";
import { TimeSelect } from "../components/TimeSelect";

export function TaskDetailsPage() {
  const [tasks, setTasks] = useState();
  const [saveIsLoading, setSaveIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const { taskId } = useParams();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const timeRef = useRef();

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

  async function handleSaveClick() {
    setSaveIsLoading(true);
    const newErrors = [];

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const time = timeRef.current.value;

    if (!title.trim()) {
      newErrors.push({
        inputName: "title",
        message: "O título é obrigatório.",
      });
      setSaveIsLoading(false);
    }
    if (!description.trim()) {
      newErrors.push({
        inputName: "description",
        message: "A descrição é obrigatória.",
      });
      setSaveIsLoading(false);
    }
    if (!time.trim()) {
      newErrors.push({
        inputName: "time",
        message: "O horário é obrigatório.",
      });
      setSaveIsLoading(false);
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      setSaveIsLoading(false);
      return;
    }
    const response = await fetch(`http://localhost:3000/tasks/${tasks.id}`, {
      method: "PATCH",
      body: JSON.stringify({ title, time, description }),
    });
    if (!response.ok) {
      return toast.error("Erro ao adicionar tarefa, tente novamente!");
    }

    const newTask = await response.json();
    setTasks(newTask);
    setSaveIsLoading(false);
    setErrors([]);
    handleClickBack();
    toast.success("Tarefa salva com sucesso!");
  }

  const titleError = errors.find((error) => error.inputName === "title");
  const descriptionError = errors.find(
    (error) => error.inputName === "description",
  );
  const timeError = errors.find((error) => error.inputName === "time");

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
        <div className="bg-brand-white space-y-6 rounded-[10px] p-6 text-sm">
          <div>
            <Input
              id="name"
              label="Nome"
              defaultValue={tasks?.title}
              ref={titleRef}
              error={titleError?.message}
            />
          </div>
          <div>
            <TimeSelect
              defaultValue={tasks?.time}
              ref={timeRef}
              error={timeError?.message}
            />
          </div>
          <div>
            <Input
              id="description"
              label="Descrição"
              defaultValue={tasks?.description}
              ref={descriptionRef}
              error={descriptionError?.message}
            />
          </div>
        </div>
        <div className="flex justify-end gap-2.5">
          <Button onClick={handleClickBack} color="secondary">
            Cancelar
          </Button>
          <Button
            className="h-9 w-17.5"
            disabled={saveIsLoading}
            onClick={handleSaveClick}
          >
            {saveIsLoading ? <LoaderIcon className="animate-spin" /> : "Salvar"}
          </Button>
        </div>
      </div>
    </div>
  );
}
