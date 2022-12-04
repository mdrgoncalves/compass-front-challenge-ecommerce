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

    static async getUser(req: Request, res: Response) {

        const { user_id } = req.params;

        try {
            const userFound = await user.findOne({ _id: user_id });
            return res.status(200).json(userFound);
        } catch (error) {
            return res.status(400).
                json({ message: 'User search was unsuccessful' });
        }
    }

    static async getAllUsers(req: Request, res: Response) {
            
            try {
                const allUsers = await user.find();
                return res.status(200).json(allUsers);
            } catch (error) {
                return res.status(400).
                    json({ message: 'User search was unsuccessful' });
            }
    }

    static async updateUser(req: Request, res: Response) {

        const { user_id } = req.params;
        const bodyData = req.body;

        try {
            const userUpdated = await user.findOneAndUpdate(
                { _id: user_id },
                bodyData,
                { new: true }
            );
            return res.status(200).json(userUpdated);
        } catch (error) {
            return res.status(400).
                json({ message: 'User update was unsuccessful' });
        }
    }

};

export default UserController;