const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    description: {type: String, required: true},
    type: {type: String, required: true},
    file: {type: String, required: true}
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('Product', ProductSchema, 'Products')