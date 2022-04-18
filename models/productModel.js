import mongoose from 'mongoose';

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
            required: true,
        },
        image_list: {
            type: Array,
            required: true,
        },
        details: {
            type: Object,
        },
        category: {
            type: Array,
            required: true,
        },
        publish_time: { type: String },
        bullet_points: { type: String },
        popularity: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
