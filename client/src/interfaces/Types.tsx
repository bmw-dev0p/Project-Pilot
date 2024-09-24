// Define the Column interface with the optional color property
export interface Column {
  name: string;
  items: Task[];
  color?: string; // Optional color property for column styling
}
// Define the Columns type that maps column IDs to Column objects
export type Columns = {
  [key: string]: Column;
};
// Define the TaskFormProps interface for the TaskForm component
// In your Types.tsx or wherever you define TaskData
// Types.tsx
// Define the Task interface
export interface Task {
id: number;
title: string;
description: string;
dueDate: string;
assignedUsers: string[]; // Ensure this property exists
assignedUser: string;
status_id: number;
user_id:number | undefined;
}
// Define the TaskData interface if it's needed separately
export interface TaskData {
id: number;
title: string;
description: string;
dueDate: string;
assignedUser: string; // A single assigned user
}