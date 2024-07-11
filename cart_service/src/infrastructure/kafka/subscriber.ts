import userCreatedConsumers from "./consumers/userCreatedConsumers";
import productCreatedConsumers from "./consumers/productCreatedConsumer";


export const createSubscriber = () => {
    return {
        userCreated: userCreatedConsumers,
        productcreated: productCreatedConsumers
    }
}