// users.ts

export default class Users {
  id: Number;
  email: String;
  password: string;

  constructor(id: string, email: string, password: string) {
    this.id = Number(id);
    this.email = email;
    this.password = password;
  }
}
