/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        MONGO_URI:
            'mongodb+srv://masterUser:0000@cluster0.dh9ma.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    },
};

module.exports = nextConfig;
