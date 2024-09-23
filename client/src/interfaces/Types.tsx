
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
export interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    assignedUsers: string[]; // Ensure this matches the expected property
  }
  
  // Update TaskData to include assignedUsers
  export interface TaskData {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    assignedUsers: string[]; // Add this property to match Task
  }
  
  