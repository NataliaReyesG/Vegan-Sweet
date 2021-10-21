const Product = require("../models/Product")
const ProductControllers = {}

ProductControllers.createProduct = async (req, res) => {

    try{
        const {  name, price, description, type, file } = req.body
        

        const newProduct = new Product({ name, price, description, type, file })

        await newProduct.save()

        res.status(201).json({message: "Producto Creado", newProduct})
    } catch (error){
        console.log(error)
        res.status(400).json({message: "Error al crear el producto", error})
    }
}


ProductControllers.updateProduct = async (req, res) => {

    try{
   
        const idProduct = req.params.id_Product

        const updatedProduct = await Product.findByIdAndUpdate(idProduct, req.body, {new: true})

        if(updatedProduct) res.status(201).json({message: "Producto Actualizado", updatedProduct})
        else res.status(202).json({message: "El producto no existe"})
    } catch (error){
        console.log(error)
        res.status(400).json({error})
    }
}

/*ProductControllers.getAllProduct = async (req, res) => {
    try {
        const Product = await Product.find()

        if(Product) res.status(200).json(Product)
        else res.status(202).json({message: "Producto no encontrado"})
    } catch (error) {
        res.status(400).json({message: "error", error})
    }
}*/

ProductControllers.getAllProduct = (req, res) => {
    //si tenemos filtro nombre lo guardamos
    let name = req.params["name"];
      //let params = req.body;

    //busqueda de las categorias
    Product.find({name : new RegExp(name, "i")},(err, dataProduct) => {
        //si hay error al conectar mongo
        if (err) {
            res.status(500).send({mensaje: "Error al conectar al servidor"});
        } else {
           if (dataProduct) {
            res.status(200).send({product: dataProduct});
//            console.log(dataProduct)
        } else {
            res.status(401).send({mensaje: "No hay productos"});
        }
        }
    });
};          



ProductControllers.getProductById = async (req, res) => {
    try {
        const Product = await Product.findById(req.params.id_Product)

        if(Product) res.status(200).json({message: "Producto encontrado", Product})
        else res.status(202).json({message: "Producto no encontrado"})
    } catch (error) {
        res.status(400).json({message: "Error", error})
    }
}

ProductControllers.deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id_Product)

        res.status(202).json({message: "Producto eliminado"})
    } catch (error) {
        res.status(400).json({message: "Error", error})
    }
}


module.exports = ProductControllers