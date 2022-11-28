import { Request, Response } from "express";
import user from '../models/User.js';

class UserController {

    static async createUser(req: Request, res: Response) {

        const bodyData = req.body;

        try {
            const newUser = await user.create(bodyData);
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(400).
                json({ message: 'User creation was unsuccessful' });
        }
    }

};

export default UserController;