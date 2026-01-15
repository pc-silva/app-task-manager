import { Sidebar } from "./components/Sidebar";
import { Task } from "./components/Task";

export const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Task />
    </div>
  );
};
