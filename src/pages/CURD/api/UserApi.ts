// import { Pagination } from 'api/table.api';

export interface User {
  id: number;
  name: string;
  userName: string;
  pwd: string;
  token?: string;
}
export interface GetUserListByPageSearch {
  id: number;
}
const UserList: User[] = [
  { id: 1, name: 'aab', userName: 'admin1', pwd: '123123', token: '000000000' },
  { id: 2, name: 'abb', userName: 'admin2', pwd: '123123', token: '000000000' },
  { id: 3, name: 'abc', userName: 'admin3', pwd: '123123', token: '000000000' },
  { id: 4, name: 'abd', userName: 'admin4', pwd: '123123', token: '000000000' },
  { id: 5, name: 'abe', userName: 'admin5', pwd: '123123', token: '000000000' },
  { id: 6, name: 'abf', userName: 'admin6', pwd: '123123', token: '000000000' },
  { id: 7, name: 'abg', userName: 'admin7', pwd: '123123', token: '000000000' },
];

// export const GetUserList = (search: GetUserListByPageSearch | undefined): User[] => {
//   return UserList;
// };

// export const GetUserListByPage = (page: Pagination, search: GetUserListByPageSearch): User[] => {
//   return UserList;
// };

export const GetUserInfo = (id: number): User | undefined => {
  return UserList.find((o) => o.id == id);
};

export const UpdateUser = (user: User): boolean => {
  const tuser = UserList.find((o) => o.id == user.id);
  if (tuser == undefined) return false;
  tuser.name = user.name;
  tuser.pwd = user.pwd;
  tuser.token = user.token;
  tuser.userName = user.userName;
  return true;
};

export const DeleteUser = (id: number): boolean => {
  const userindex = UserList.findIndex((o) => o.id == id);
  delete UserList[userindex];
  return true;
};

export const AddUser = (user: User): boolean => {
  UserList.push(user);
  return true;
};
