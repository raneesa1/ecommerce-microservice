const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URL;

export default async () => {
    try {
        await mongoose.connect(uri);
        console.log(`
                           _   _      _    
                          | | | |    | |   
                          | |_| | ___| | __
                          |  _  |/ _ \\ |/ /
                          | | | |  __/   < 
                          |_| |_|\\___|_|\\_\\
       
        🍃🍃🍃🍃🍃🍃 MongoDB connected successfully!🍃🍃🍃🍃🍃🍃
        `);
    } catch (error:any) {
        console.error('🍁🍁🍁🍁🍁 Database Connection failed 🍁🍁🍁🍁🍁');
        console.error(error.message);
        process.exit(1);
    }
};


