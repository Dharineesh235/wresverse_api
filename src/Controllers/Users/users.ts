import { Request, Response } from "express";
import { User_Model } from "../../Modals/users";

export const postUser = async (req: Request, res: Response) => {
  try {
    const { userName, email, password, isAdmin } = req.body;
    const newUser = {
      userName,
      email,
      password,
      isAdmin,
    };
    const data = await User_Model.insertMany([newUser]);
    res.status(200).send(data);
  } catch (e) {
    res.status(400).send(e);
  }
};
