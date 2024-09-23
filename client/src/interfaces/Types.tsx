
export interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    assignedUsers: string[];
  }
  
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
  export interface TaskFormProps {
    onSubmit: (task: Task) => void;
    onDelete: (taskId: string) => void;
    onClose: () => void;
    initialTask?: Task | null; // Allow both undefined and null for initialTask
  }
  