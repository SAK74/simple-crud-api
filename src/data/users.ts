export interface UserType {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
}
export type UserWithoutId = Omit<UserType, "id">;

class UsersData {
  users: UserType[] = [];
  addUser(user: UserType) {
    this.users.push(user);
  }
  findUser(_id: string) {
    return this.users.find((user) => user.id === _id);
  }
  deleteUser(_id: string) {
    this.users.splice(this.findIdx(_id), 1);
  }
  changeUser(_id: string, user: UserWithoutId) {
    this.users[this.findIdx(_id)] = { ...user, id: _id };
  }
  private findIdx(_id: string) {
    return this.users.findIndex(({ id }) => id === _id);
  }
}

export default new UsersData();
