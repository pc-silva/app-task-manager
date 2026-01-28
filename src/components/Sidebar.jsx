import { HomeIcon, TasksIcon } from "../assets/icons";
import { SidebarButton } from "./SidebarButton";

export const Sidebar = () => {
  return (
    <div className="bg-brand-white h-screen w-68">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-brand-primary text-xl font-semibold">
          Task Manager
        </h1>
        <p className="text-brand-darkBlue w-38.75 text-xs">
          Um simples{" "}
          <span className="text-brand-primary font-semibold">
            organizador de tarefas
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton variant={"unselected"}>
          <HomeIcon />
          Início
        </SidebarButton>
        <SidebarButton variant={"selected"}>
          <TasksIcon />
          Minhas Tarefas
        </SidebarButton>
      </div>
    </div>
  );
};
