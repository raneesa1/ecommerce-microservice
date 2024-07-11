const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URL;

export default async () => {
    try {
        await mongoose.connect(uri);
        console.log(`MongoDB connected successfully!
        `);
    } catch (error:any) {
        console.error(' Database Connection failed ');
        console.error(error.message);
        process.exit(1);
    }
};


