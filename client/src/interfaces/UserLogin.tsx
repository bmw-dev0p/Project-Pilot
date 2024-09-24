// Interface definition for UserLogin
export interface UserLogin {
  id?: number;
    fname?: string; // "?" denotes an optional property (not used in actual login, but collected at sign up)
    lname?: string;
    username: string;  
    email?: string; 
    password: string;  
    img?: string;
  }
  