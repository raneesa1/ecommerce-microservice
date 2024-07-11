import { Document, Types, Model, model, Schema } from "mongoose";


interface ICartItem {
    productId: Types.ObjectId;
    quantity: number;
}

interface ICartDocument extends Document {
    userId: Types.ObjectId;
    items: ICartItem[];
}


const cartSchema: Schema = new Schema({
    userId: { type: Types.ObjectId, required: true },
    items: [{
        productId: { type: Types.ObjectId, required: true },
        quantity: { type: Number, required: true }
    }]
}, {
    timestamps: true
});

const CartModel: Model<ICartDocument> = model<ICartDocument>("Cart", cartSchema);

export { ICartDocument, CartModel };
