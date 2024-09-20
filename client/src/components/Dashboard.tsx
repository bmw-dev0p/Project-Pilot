// Board.tsx
import TaskColumn from "./TaskColumn";

function Dashboard() {
  const tasksToDo = [
    { title: "Make a new Post", description: "Tell about our new action", dueDate: "10/28/21", assignedUsers: "User1" },
    { title: "Make a website prototype", description: "Design a landing page", dueDate: "1/28/21", assignedUsers: "User2" }
  ];

  const tasksDoing = [
    { title: "Check design materials", description: "Check marketing materials", dueDate: "5/7/21", assignedUsers: "User3" }
  ];

  const tasksDone = [
    { title: "Weekly planning meeting", description: "Discuss content plan", dueDate: "8/30/21", assignedUsers: "User4" }
  ];

  return (
    <div className="board-container d-flex">
      <TaskColumn title="To Do" tasks={tasksToDo} />
      <TaskColumn title="Doing" tasks={tasksDoing} />
      <TaskColumn title="Done" tasks={tasksDone} />
    </div>
  );
}

export default Dashboard;

