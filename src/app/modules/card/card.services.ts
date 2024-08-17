
import QueryBuilder from "../../builder/queryBuilder";
import { CardConst } from "./card.const";
import { TCards } from "./card.interface";
import { CartModel } from "./card.model";

const createCardIntoDb = async (payload: TCards) => {
    const result = await CartModel.create(payload);

    return result
}
const getCardsFromDb = async (query: Record<string, unknown>) => {
    const cardQuery = new QueryBuilder(CartModel.find(), query)
    .search(CardConst)
  

  const result = await cardQuery.modelQuery;

  return result;

  };
  const getSingleCardFromDb = async (title: string) => {
 
    const result = await CartModel.find({title:title});
    return result;
  };

export const cardServices = {
    createCardIntoDb,
    getCardsFromDb,
    getSingleCardFromDb
} 