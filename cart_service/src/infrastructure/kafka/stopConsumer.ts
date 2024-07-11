import {consumer} from "."

export const stopConsumer = async () => {
    try {
        console.log("Stopping consumer...");
        await consumer.stop();
        await consumer.disconnect();
        console.log("Consumer stopped.");
    } catch (error:any) {
        console.error("Error stopping consumer:", error);
        throw new Error(error?.message);
    }
}