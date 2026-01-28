import { Toaster } from "sonner";

import { Sidebar } from "./components/Sidebar";
import { Task } from "./components/Task";

export const App = () => {
  return (
    <div className="flex">
      <Toaster />
      <Sidebar />
      <Task />
    </div>
  );
};
