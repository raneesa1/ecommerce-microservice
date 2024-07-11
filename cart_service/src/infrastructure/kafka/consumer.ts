import {consumer} from "."
import { createSubscriber } from "./subscriber"
import {stopConsumer} from './stopConsumer'

export const runConsumer = async()=>{
    try {
        await consumer.connect();

        await consumer.subscribe({
            topic:'to-user',
            fromBeginning: true
        });

        await consumer.subscribe({
            topic:'product',
            fromBeginning:true
        })

        const subscriber:any = createSubscriber();
        console.log("here.....!");
        await consumer.run({
            eachMessage: async ({ message }) => {
                const {key,value} = message;
                console.log(key,'🚀🚀🚀🚀🚀🚀🚀',value);
                const subscriberMethod = String(key)
                console.log("🚀 ~ file: consumer.ts:25 ~ eachMessage: ~ subscriberMethod:", subscriberMethod)
                const subscriberData = JSON.parse(String(value))
                console.log("🚀 ~ file: consumer.ts:27 ~ eachMessage: ~ subscriberData:", subscriberData)

                try{
                    await subscriber[subscriberMethod](subscriberData);
                } catch(error: any) {
                    console.error(`Error processing message from topic: ${error.message}`);
                    throw new Error(error?.message)
                    await stopConsumer();
                }

              },
        })
    } catch (error:any) {
        console.error('Consumer error:', error.message);
        throw new Error(error?.message) 
    }
}


