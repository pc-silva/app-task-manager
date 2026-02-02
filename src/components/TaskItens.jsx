import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "sonner";

import CheckIcon from "../assets/icons/check.svg?react";
import DetailsIcon from "../assets/icons/details.svg?react";
import LoaderIcon from "../assets/icons/loader.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import { Button } from "./Button";

export const TaskItens = ({ task, handleStatusChange, onDeleteTask }) => {
  const [deleteIsLoading, setDeleteIsLoading] = useState(false);

  async function handleDeleteTask() {
    setDeleteIsLoading(true);
    const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      setDeleteIsLoading(false);
      return toast.error("Erro ao deletar tarefa, tente novamente!");
    }
    onDeleteTask(task.id);
    setDeleteIsLoading(false);
  }

  function getStatusColor() {
    switch (task.status) {
      case "done":
        return "bg-brand-primary/10 text-brand-primary";
      case "in_progress":
        return "bg-brand-process/10 text-brand-process";
      default:
        return "bg-brand-darkBlue/5 text-brand-darkBlue";
    }
  }

  function getStatusColorLabel() {
    switch (task.status) {
      case "done":
        return "bg-brand-primary";
      case "in_progress":
        return "bg-brand-process";
      default:
        return "bg-brand-darkBlue/20";
    }
  }
  return (
    <div
      className={`flex justify-between rounded-[10px] py-3 pr-4 pl-3 text-sm font-normal ${getStatusColor()}`}
    >
      <div className="flex items-center gap-3">
        <label
          className={`relative flex h-6 w-6 cursor-pointer items-center justify-center ${getStatusColorLabel()} rounded-md`}
        >
          <input
            type="checkbox"
            checked={task.status === "done"}
            onChange={() => handleStatusChange(task.id)}
            className="absolute h-full w-full cursor-pointer opacity-0"
          />
          {task.status === "done" && <CheckIcon />}
          {task.status === "in_progress" && (
            <LoaderIcon className="animate-spin" />
          )}
        </label>{" "}
        {task.title}
      </div>
      <div className="flex items-center gap-2">
        <Button color={"ghost"} onClick={handleDeleteTask}>
          {deleteIsLoading ? (
            <LoaderIcon className="animate-spin" />
          ) : (
            <TrashIcon />
          )}
        </Button>
        <a href="#">
          <DetailsIcon />
        </a>
      </div>
    </div>
  );
};

TaskItens.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.oneOf(["morning", "afternoon", "evening"]).isRequired,
    status: PropTypes.oneOf(["not_started", "in_progress", "done"]).isRequired,
  }).isRequired,
  handleStatusChange: PropTypes.func.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
};
