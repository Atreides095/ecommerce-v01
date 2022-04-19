/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        MONGO_URI:
            'mongodb+srv://masterUser:0000@cluster0.dh9ma.mongodb.net/myStore?retryWrites=true&w=majority',
        SERVER_URI: 'http://localhost:3000',
        ENV: 'development',
    },
};

module.exports = nextConfig;
