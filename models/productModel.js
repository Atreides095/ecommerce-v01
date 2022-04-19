import mongoose from 'mongoose';
// const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        manufacturer: {
            type: String,
            required: true,
        },
        image_single: {
            type: String,
            // required: true,
        },
        image_list: {
            type: Array,
            required: true,
        },
        details: {
            type: Object,
        },
        category_single: { type: String, required: true },
        category_list: {
            type: Array,
            required: true,
        },
        timestamp_created: { type: Number },
        bulletpoints: { type: String },
        section: { type: String, required: true },
        popularity: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Product ||
    mongoose.model('Product', productSchema);

// module.exports = Product;
