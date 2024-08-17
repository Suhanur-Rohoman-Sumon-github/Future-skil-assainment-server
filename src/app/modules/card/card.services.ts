
import { TCards } from "./card.interface";
import { CartModel } from "./card.model";

const createCardIntoDb = async (payload: TCards) => {
    const result = await CartModel.create(payload);

    return result
}
const getCardsFromDb = async () => {
    const result = await CartModel.find();
    console.log(result);
    return result;
  };
  const getSingleCardFromDb = async (title: string) => {
  console.log(title);
    const result = await CartModel.find({title:title});
    return result;
  };

export const cardServices = {
    createCardIntoDb,
    getCardsFromDb,
    getSingleCardFromDb
} 