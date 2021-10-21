const express = require("express")
const router = express.Router()

//controladores
const ProductControllers = require("../controllers/Product.controllers")
console.log(ProductControllers)

router.post("/createProduct", ProductControllers.createProduct)
router.put("/updateProduct/:id_Product", ProductControllers.updateProduct)
router.get("/getAllProduct", ProductControllers.getAllProduct)
router.get("/getProductById/:id_Product", ProductControllers.getProductById)
router.delete("/deleteProduct/:id_Product", ProductControllers.deleteProduct)

module.exports = router