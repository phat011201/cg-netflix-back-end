// users.ts

export default class Users {
  id: Number;
  name: String;
  nickname: String;
  email: String;
  password: string;

  constructor(id: Number, name: String, nickname: String, email: String, password: string) {
    this.id = id;
    this.name = name;
    this.nickname = nickname;
    this.email = email;
    this.password = password;
  }
}
