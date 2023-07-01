export interface UserType {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
}

class UsersData {
  users: UserType[] = [
    { id: "asd", username: "example", age: 12, hobbies: [] },
  ];
  addUser(user: UserType) {
    this.users.push(user);
  }
  findUser(_id: string) {
    return this.users.find((user) => user.id === _id);
  }
  deleteUser(_id: string) {
    this.users.splice(this.findIdx(_id), 1);
  }
  changeUser(_id: string, user: UserType) {
    this.users[this.findIdx(_id)] = user;
  }
  private findIdx(_id: string) {
    return this.users.findIndex(({ id }) => id === _id);
  }
}

export default new UsersData();
