// usersController.ts

// import modules
import { Request, Response } from "express";
import bcrypt from "bcrypt";

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

  addUser: async (req: Request, res: Response) => {
    const { id, email, password } = new Users(
      req.body.id,
      req.body.name,
      req.body.nickname,
      req.body.email,
      req.body.password
    );

    try {
      const hashedPassword = await hashPassword(password);

      const newUser: any = {
        id,
        email,
        password: hashedPassword,
      };

      usersData.push(newUser);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: "Error adding user" });
    }
  },

  updateUser: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user: any = usersData.find((user: any) => user.id === id);
    if (user) {
      user.name = req.body.name;
      user.nickname = req.body.nickname;
      user.email = req.body.email;

      try {
        const hashedPassword = await hashPassword(req.body.password);

        user.password = hashedPassword;
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ message: "Error updating user" });
      }
    } else {
      res.status(404).json({ message: "User not found!" });
    }
  },
};

const hashPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

export default usersController;
