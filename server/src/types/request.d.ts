declare namespace Express {
    interface Request {
      user?: {
        username: string;
      };
    }
  }

  //this is needed for authToken.ts (user payload)
