export interface TaskData {
    id?: number;
    title: string;
    description?: string;
    dueDate? : string;
    status_id?: number;
    user_id?: number;
    assignedUser?: string;
    assignedUsers?: string[]; 
  }