const productModel = require('../models/ProductModel');
const mongoose = require('mongoose');


class ProductController {

    async store(req, res) {
        const createProduct = await productModel.create(req.body);
        return res.status(200).json(createProduct);
    }

    async showUnique(req, res) {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: "Id is not valid !" });

        const products = await productModel.findById(id);
        if (!products)
            return res.status(404).json({ message: "Prodcut not exists !" });

        return res.status(200).json(products);
    }

    async showAll(req, res) {
        const products = await productModel.find();
        return res.status(200).json({ products });
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: "Id is not valid !" });
            await productModel.findByIdAndUpdate(id, req.body);
            return res.status(200).json({ message: "Product updated" });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: "Error update product" });
        }
    }

    async destroy(req, res) {
        try {
            const { id } = req.params;
            if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: "Id is not valid !" });
            const prdDeleted = await productModel.findByIdAndDelete(id);

            if (!prdDeleted)
                return res.status(404).json({ message: "Prodcut not exists !" });

            return res.status(200).json({ message: "Product deleted" });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: "Error update product" });
        }
    }
}

module.exports = new ProductController();