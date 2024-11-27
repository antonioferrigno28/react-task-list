// Esercizio
// Mostriamo in due liste diverse gli elementi dell’array tasks. Nella prima lista mostriamo solo i task (title, priority e estimatedTime) che hanno stato “backlog” o “in_progress”.
// Nella seconda lista mostriamo i task che hanno stato “completed”.
// Infine riprodurre il layout lasciato in allegato.
// BONUS
// Mostrare lo stato di ogni task in un piccolo tag di fianco al titolo, associando però ad ogni stato un colore diverso.
// Buon lavoro!

import { useState } from "react";
import { tasks } from "./data/tasksData";

import "./App.css";

function App() {
  const backlogTasks = tasks.filter(
    (task) => task.state === "backlog" || task.state === "in_progress"
  );
  const completedTasks = tasks.filter((task) => task.state === "completed");

  return (
    <div>
      <h1 className=" bg-primary py-3 px-3">Task Manager</h1>
      <div className=" px-3">
        {/* Lista Backlog & In Progress */}
        <div>
          <h2 className="fs-5 fw-bold">
            Current tasks ({backlogTasks.length})
          </h2>

          <ul className="list-unstyled">
            {backlogTasks.map((task) => (
              <li key={task.id} className="my-4">
                <strong>{task.title}</strong>{" "}
                <span
                  className={`badge ${
                    task.state === "backlog"
                      ? "ms-1 p-2 rounded-0 bg-warning"
                      : "ms-1 p-2 rounded-0 bg-danger"
                  }`}
                >
                  {task.state}
                </span>
                <div>Priority: {task.priority}</div>
                <div>Estimated Time: {task.estimatedTime} min</div>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        {/* Lista Completed */}
        <div>
          <h2 className="fs-5 fw-bold">
            Completed Tasks ({completedTasks.length})
          </h2>
          <ul className="list-unstyled">
            {completedTasks.map((task) => (
              <li key={task.id} className="my-4">
                <strong>{task.title}</strong>{" "}
                <span className="badge ms-1 bg-success p-2 rounded-0">
                  {task.state}
                </span>
                <div>Priority: {task.priority}</div>
                <div>Estimated Time: {task.estimatedTime} min</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
