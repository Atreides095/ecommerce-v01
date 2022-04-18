import connectDB from '../../utils/dbConnect';

connectDB();

export default function handler(req, res) {
    res.json({ message: 'this is a test' });
}
