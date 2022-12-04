import { Request, Response } from "express";
import address from "../models/Address.js";

class AddressController {

    static async createAddress(req: Request, res: Response) {

        const bodyData = req.body;

        try {
            const newAddress = await address.create(bodyData);
            return res.status(201).json(newAddress);
        } catch (error) {
            return res.status(400).
                json({ message: 'Address creation was unsuccessful' });
        }
    }

    static async getAddress(req: Request, res: Response) {
        const id = req.params.address_id;
        try {
            const userAddress = await address.findById(id).populate('user');
            return res.status(200).json(userAddress);
        } catch (error) {
            return res.status(404).
                json({ message: 'Address not found' });
        }
    }

    static async getAddressByUser(req: Request, res: Response) {
        const id = req.params.user_id;
        try {
            const userAddress = await address.find({ user: id });
            return res.status(200).json(userAddress);
        } catch (error) {
            return res.status(404).
                json({ message: 'Address not found' });
        }
    }
}

export default AddressController;