// const mongoose = require('mongoose');
// const Product = require('../models/productModel.js');
// const User = require('../models/userModel.js');
// const productsData = require('../data/fullArray.json');
// const userData = require('../data/users.json');

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(
//             'mongodb+srv://masterUser:0000@cluster0.dh9ma.mongodb.net/myStore?retryWrites=true&w=majority',
//             {
//                 useUnifiedTopology: true,
//                 useNewUrlParser: true,
//             }
//         );
//         console.log(`MongoDB Connected> ${conn.connection.host}`);
//     } catch (error) {
//         console.error(`Error: ${error.message}`);
//         process.exit(1);
//     }
// };

// connectDB();

// const importData = async () => {
//     try {
//         await Promise.all([Product.deleteMany(), User.deleteMany()]);

//         const createdUsers = await User.insertMany(userData);

//         await Product.insertMany(productsData);

//         console.log('Data Imported!');
//         process.exit();
//     } catch (error) {
//         console.error(`${error}`);
//         process.exit(1);
//     }
// };

// const destroyData = async () => {
//     try {
//         await Promise.all([Product.deleteMany(), User.deleteMany()]);

//         console.log('Data Destroyed!');
//         process.exit();
//     } catch (error) {
//         console.error(`${error}`);
//         process.exit(1);
//     }
// };

// if (process.argv[2] === '-d') {
//     destroyData();
// } else {
//     importData();
// }
