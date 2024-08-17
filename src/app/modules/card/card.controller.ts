import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendRespone";
import { cardServices } from "./card.services";

const createCards = catchAsync(async (req, res) => {
    const result = await cardServices.createCardIntoDb(req.body);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cards added successfully',
      data: result,
    });
  });

  const getAllCartsFromDb = catchAsync(async (req, res) => {
    const result = await cardServices.getCardsFromDb();
  console.log(result);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'all cards details retrieve successfully',
      data: result,
    });
  });
  const getSingleCard = catchAsync(async (req, res) => {
  
    const result = await cardServices.getSingleCardFromDb(
      req.query.title as string,
    );
    
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'single cards retrieve successfully',
      data: result,
    });
  });
  

  export const cardsControllers = {
    createCards,
    getAllCartsFromDb,
    getSingleCard
  }