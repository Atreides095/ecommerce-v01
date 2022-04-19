import connectDB from '../../../utils/dbConnect';
import Product from '../../../models/productModel';

connectDB();

export default async function handler(req, res) {
    try {
        const sort = req.query.sort || 'name';
        const limit = Number(req.query.limit) || 10;
        const page = Number(req.query.page) || 1;
        const keyword = req.query.keyword
            ? {
                  name: {
                      $regex: req.query.keyword,
                      $options: 'i',
                  },
              }
            : {};

        const count = await Product.countDocuments({ ...keyword });
        const products = await Product.find({ ...keyword })
            .sort({ [sort]: 'desc' })
            .limit(limit)
            .skip(limit * (page - 1));

        return res.status(200).json({
            page,
            pages: Math.ceil(count / limit),
            matches: count,
            products,
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
}
