import CheckIcon from "../assets/icons/check.svg?react";
import DetailsIcon from "../assets/icons/details.svg?react";
import LoaderIcon from "../assets/icons/loader.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import { Button } from "./Button";

export const TaskItens = ({ task, handleStatusChange, handleDeleteTask }) => {
  function getStatusColor() {
    switch (task.status) {
      case "done":
        return "bg-[#00ADB5]/10 text-[#002C2E]";
      case "in_progress":
        return "bg-[#FFAA04]/10 text-[#FFAA04]";
      default:
        return "bg-[#35383E]/5 text-[#35383E]";
    }
  }

  function getStatusColorLabel() {
    switch (task.status) {
      case "done":
        return "bg-[#00ADB5]";
      case "in_progress":
        return "bg-[#FFAA04]";
      default:
        return "bg-[#35383E]/20";
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
        <Button variant={"ghost"} onClick={() => handleDeleteTask(task.id)}>
          <TrashIcon />
        </Button>
        <a href="#">
          <DetailsIcon />
        </a>
      </div>
    </div>
  );
};
