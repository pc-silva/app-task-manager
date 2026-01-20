import { Sidebar } from "./components/Sidebar";
import { Task } from "./components/Task";
import { Toaster } from "sonner";

export const App = () => {
  return (
    <div className="flex">
      <Toaster />
      <Sidebar />
      <Task />
    </div>
  );
};
