import { Request, Response, Router } from "express";
import { createRandomAdminsAndUsers } from "../../../models/su/createRandomAdminsAndUsers";

export const createRandomAdminsAndUsersRouter = Router();

createRandomAdminsAndUsersRouter.post(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    const numAdmins = parseInt(req.body.numAdmins) || 20;
    const numUsers = parseInt(req.body.numUsers) || 100;

    try {
      await createRandomAdminsAndUsers(numAdmins, numUsers);
      return res.status(200).send({ success: true });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
);
