import { Request, Response } from "express";
import { User_Model } from "../../Modals/users";

export const postUser = async (req: Request, res: Response) => {
  try {
    const { userName, email, password } = req.body;
    const { admin } = req.query;
    const isAdmin = admin ? true : false;
    const newUser = {
      userName,
      email,
      password,
      isAdmin,
    };
    if (!userName || !email || !password)
      res.status(400).send({
        msg: "Fields should not be empty...",
        userName,
        email,
        password,
        admin,
      });
    const existingUser = await User_Model.find({ email });
    if (existingUser.length > 0){
      res
        .status(400)
        .send({ msg: "User already exists",userEx:existingUser.length, userName, email, password, admin });
    }

    const user = new User_Model(newUser);
    const data = await user.save();
    const data1 = await User_Model.find({ email });
    res.status(200).send({ msg: "User Registered.", data1 });
  } catch (e) {
    res.status(400).send(e);
  }
};
