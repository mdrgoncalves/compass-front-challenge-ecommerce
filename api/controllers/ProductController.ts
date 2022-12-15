import { Request, Response } from "express";
import product from '../models/Product.js';

class ProductController {

    static async createProduct(req: Request, res: Response) {

        const bodyData = req.body;

        try {
            const newProduct = await product.create(bodyData);
            return res.status(201).json(newProduct);
        } catch (error) {
            return res.status(400).
                json({ message: 'Product creation was unsuccessful' });
        }
    }

    static async updateProduct(req: Request, res: Response) {

        const { product_id } = req.params;
        const bodyData = req.body;

        try {
            const updatedProduct = await product.findByIdAndUpdate
                (product_id, bodyData, { new: true });
            return res.status(200).json(updatedProduct);
        } catch (error) {
            return res.status(400).
                json({ message: 'Product update was unsuccessful' });
        }
    }

    static async deleteProduct(req: Request, res: Response) {

        const { product_id } = req.params;

        try {
            await product.findByIdAndDelete(product_id);
            return res.status(200).json({ message: 'Product deleted' });
        } catch (error) {
            return res.status(404).
                json({ message: 'Product not found' });
        }
    }

    static async getProductById(req: Request, res: Response) {

        const { product_id } = req.params;

        try {
            const foundProduct = await product.findById
                (product_id);
            return res.status(200).json(foundProduct);
        } catch (error) {
            return res.status(404).
                json({ message: 'Product not found' });
        }
    }

    static async getProducts(req: Request, res: Response) {

        try {
            const foundProducts = await product.find();
            return res.status(200).json(foundProducts);
        } catch (error) {
            return res.status(404).
                json({ message: 'Products not found' });
        }
    }

    static async getProductsByCategory(req: Request, res: Response) {

        const { category } = req.params;

        try {
            const foundProducts = await product.find
                ({ productCategory: category });
            return res.status(200).json(foundProducts);
        } catch (error) {
            return res.status(404).
                json({ message: 'Products not found' });
        }
    }

    static async getProductsByCategoryAndPage(req: Request, res: Response) {

        const { category, page, limit } = req.params;
        const limitQuery = Number(limit);
        const skip = (Number(page) - 1) * limitQuery;

        try {
            const foundProducts = await product.find
                ({ productCategory: category })
                .limit(limitQuery).skip(skip);
            return res.status(200).json(foundProducts);
        } catch (error) {
            return res.status(404).
                json({ message: 'Products not found' });
        }
    }

    static async getProductsByCategoryAndPageSortedByName(req: Request, res: Response) {

        const { category, page, limit, sort } = req.params;
        const limitQuery = Number(limit);
        const skip = (Number(page) - 1) * limitQuery;

        try {
            const foundProducts = await product.find
                ({ productCategory: category })
                .limit(limitQuery).skip(skip).sort({ productName: 1 });
            return res.status(200).json(foundProducts);
        } catch (error) {
            return res.status(404).
                json({ message: 'Products not found' });
        }
    }

    static async getProductsByCategoryAndPageSortedByPrice(req: Request, res: Response) {

        const { category, page, limit, sort } = req.params;
        const limitQuery = Number(limit);
        const skip = (Number(page) - 1) * limitQuery;

        try {
            const foundProducts = await product.find
                ({ productCategory: category })
                .limit(limitQuery).skip(skip).sort({ productPrice: 1 });
            return res.status(200).json(foundProducts);
        } catch (error) {
            return res.status(404).
                json({ message: 'Products not found' });
        }
    }
}

export default ProductController;

