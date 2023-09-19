export type TUsersAction = {
  data: TUser[];
}
export type TUser = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}