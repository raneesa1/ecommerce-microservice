import mongoose from "mongoose";

export default async () => {
  require("dotenv").config();
  console.log(process.env.MONGO_URI);
  try {
    await mongoose.connect(String(process.env.MONGO_URI).trim());
    console.log(`🍃🍃🍃🍃🍃🍃 Database connected with MongoDB 🍃🍃🍃🍃🍃🍃`); 
    console.log(
      `
      _____    ______       ____     ______     __    __     ____   ________  
      (  __ \  (   __ \     / __ \   (_  __ \    ) )  ( (    / ___) (___  ___) 
       ) )_) )  ) (__) )   / /  \ \    ) ) \ \  ( (    ) )  / /         ) )    
      (  ___/  (    __/   ( ()  () )  ( (   ) )  ) )  ( (  ( (         ( (     
       ) )      ) \ \  _  ( ()  () )   ) )  ) ) ( (    ) ) ( (          ) )    
      ( (      ( ( \ \_))  \ \__/ /   / /__/ /   ) \__/ (   \ \___     ( (     
      /__\      )_) \__/    \____/   (______/    \______/    \____)    /__\    
                                                                                                                                                    
            `
    );
  } catch (error: any) {
    console.error(`🍁🍁🍁🍁🍁 Database Connection failed 🍁🍁🍁🍁🍁`);
    console.error(error.message);
    process.exit(1);
  }
};
