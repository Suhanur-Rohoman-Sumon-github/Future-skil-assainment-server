import express from 'express';
import { cardsControllers } from './card.controller';


const router = express.Router();

router.post('/', cardsControllers.createCards);
router.get('/', cardsControllers.getAllCartsFromDb);
router.get('/title', cardsControllers.getSingleCard);
 

export const cardRoute = router;