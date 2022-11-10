import Product from "../models/ProductModel";

export const getProducts = async (req, res) => {
    try {
        const response = await Product.findAll({
            attributes : ['uuid', 'name', 'price']
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg : error.message})
    }
}

export const getProductById = async (req, res) => {
    try {
        const response = await Product.findOne({
            attributes : ['uuid', 'name', 'price'],
            where : {
                uuid : req.params.id
            }
        });

        if(!response) return res.status(404).json({msg : "Produk not found!"})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg : error.message})
    }
}

export const createProduct = async (req, res) => {
    const { name, price, userId } = req.body;
    try {
        await Product.create({
            name : name,
            price : price,
            userId : userId
        })
        res.status(201).json({msg : "Product Created"})
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const updateProduct = async (req, res) => {
    const product = await Product.findOne({
        where : {
            uuid : req.params.id
        }
    })

    if(!product) return res.status(404).json({msg : "Produk not found!"})
    const { name, price } = req.body;
    
    try {
        await Product.update({
            name : name,
            price : price,
            userId : product.userId
        },{
            where : {
                id : product.id
            }
        })
        res.status(201).json({msg : "Product Updated"})
    } catch (error) {
        res.status(400).json(error.message);
    }

}

export const deleteProduct = async (req, res) => {
    const product = await Product.findOne({
        where : {
            uuid : req.params.id
        }
    })

    if(!product) return res.status(404).json({msg : "Product not found!"})

    try {
        await Product.destroy({
            where : {
                id : product.id
            }
        })
        res.status(201).json({msg : "Product Deleted"})
    } catch (error) {
        res.status(400).json(error.message);
    }
}