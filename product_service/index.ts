import server from "./src/presentation/server";
import dbConnection from "./src/infrastructure/database/dbconnect";

(async () => {
  try {
    server;
    await dbConnection();
  } catch (error: any) {
    console.error("Error during initialization of server:", error);
    process.exit(1);
  }
})();
