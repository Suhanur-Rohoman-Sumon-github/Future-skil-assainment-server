import mongoose, { Schema } from "mongoose";
import { TCards } from "./card.interface";

const cardSchema = new Schema<TCards>({
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
})

export const CartModel = mongoose.model('Cards', cardSchema);