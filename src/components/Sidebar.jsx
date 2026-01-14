import { SidebarButton } from "./SidebarButton";

export const Sidebar = () => {
  return (
    <div className="h-screen w-68 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-[#00ADB5]">Task Manager</h1>
        <p className="w-38.75 text-xs text-[#09090B]">
          Um simples{" "}
          <span className="font-semibold text-[#00ADB5]">
            organizador de tarefas
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton variant={"ghost"}>Início</SidebarButton>
        <SidebarButton variant={"primary"}>Minhas Tarefas</SidebarButton>
      </div>
    </div>
  );
};
