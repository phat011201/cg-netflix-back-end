// usersController.ts

// import modules
import { Request, Response } from "express";

// import users model
import Users from "../models/usersModels";

// import users data
import usersData from "../data/usersData";

// define users controller
const usersController = {
  getAllUsers: (req: Request, res: Response) => {
    res.status(200).json(usersData);
  },
  getUserById: (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = usersData.find((user: any) => user.id === id);
    res.status(200).json(user);
  },
  addUser: (req: Request, res: Response) => {
    const { id, email, password } = new Users(
      req.body.id,
      req.body.name,
      req.body.nickname,
      req.body.email,
      req.body.password
    );
    const newUser: any = {
      id,
      email,
      password,
    };
    usersData.push(newUser);
    res.status(201).json(newUser);
  },
  updateUser: (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user: any = usersData.find((user: any) => user.id === id);
    if (user) {
      user.name = req.body.name;
      user.nickname = req.body.nickname;
      user.email = req.body.email;
      user.password = req.body.password;
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found!" });
    }
  },
};

export default usersController;
