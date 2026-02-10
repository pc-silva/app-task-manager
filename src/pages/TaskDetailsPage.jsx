import { useEffect, useState } from "react";
import { useParams } from "react-router";

export function TaskDetailsPage() {
  const [tasks, setTasks] = useState();
  const { taskId } = useParams();

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

  return (
    <div>
      <h1>{tasks?.title}</h1>
      <p>{tasks?.description}</p>
    </div>
  );
}
