// Board.tsx
import TaskColumn from "./TaskColumn";
import { useState, useEffect } from 'react';
import { retrieveStatuses, updateStatus, deleteStatus } from "../api/statusAPI";
import { StatusData } from "../interfaces/StatusData";
import { ApiMessage } from "../interfaces/ApiMessage";

function Dashboard() {
  // const tasksToDo = [
  //   { title: "Make a new Post", description: "Tell about our new action", dueDate: "10/28/21", assignedUsers: "User1" },
  //   { title: "Make a website prototype", description: "Design a landing page", dueDate: "1/28/21", assignedUsers: "User2" }
  // ];

  // const tasksDoing = [
  //   { title: "Check design materials", description: "Check marketing materials", dueDate: "5/7/21", assignedUsers: "User3" }
  // ];

  // const tasksDone = [
  //   { title: "Weekly planning meeting", description: "Discuss content plan", dueDate: "8/30/21", assignedUsers: "User4" }
  // ];
  const [ statuses, setStatuses ] = useState<StatusData[]>([]);
  
  const fetchStatuses = async() => {
   try {
     const data = await retrieveStatuses();
     setStatuses(data);
   } catch (err) {
    console.error('Failed to retrieve statuses', err);
   }
  };

  const statusDelete = async (statusId: number): Promise<ApiMessage> => {
    try {
      const data = await deleteStatus(statusId);
      fetchStatuses();
      return data
    } catch (err) {
      return Promise.reject(err);
    }
  }

  const statusUpdate = async (statusId: number, statusBody: StatusData) => {
    try {
      const data = await updateStatus(statusId, statusBody);
      fetchStatuses();
      return data
    } catch (err) {
      console.error('Failed to update status', err)
    }
  };

  useEffect(() => {
    fetchStatuses();
  }, []);
  return (
    <div className="board-container d-flex">
      {statuses.length > 0 ? statuses.map((status) => (
      <TaskColumn 
      key={status.id}
      id={status.id}
      title={status.title}
      update={statusUpdate}
      delete={statusDelete}
      />
      )
    ) : (
        <div>
          Could not retriev Status Columns to display! Please check again later.
        </div>
      ) 
    }
    </div>
  );
}

export default Dashboard;

