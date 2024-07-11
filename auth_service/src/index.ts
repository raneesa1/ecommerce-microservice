import server from './presentation/server'
import dbConnection from './infrastructure/database/dbConnect'


(async()=>{
    try {
        server;
        await dbConnection();
    } catch (error:any) {
        console.error(error?.message || 'An error occurred');
        process.exit(1);
    }
})();