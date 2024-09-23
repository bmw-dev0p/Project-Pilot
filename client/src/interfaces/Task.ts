import { UserData } from "./UserData";
import { StatusData } from "./StatusData";
export interface Task {
    title: string;
    description: string;
    dueDate: string;
    Status: StatusData | null;
    assignedUsers: UserData | null;
  }
  