export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IPost {
   id: number;
   title: string,
   body: string
}

export interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}
