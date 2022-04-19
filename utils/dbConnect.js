import mongoose from 'mongoose';

const conn = {
    isConnected: false,
};

const connectDB = async () => {
    if (conn.isConnected) return;

    try {
        conn.isConnected = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: ${conn.isConnected.connection.host}`);
        // console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
