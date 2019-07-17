const mongoose = ('mongoose');

let productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const productModel = mongoose.model('Product', productSchema, 'products');

module.exports = productModel;