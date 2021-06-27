import express from 'express';
import {getAllRestaurants, getDetailRestaurant} from "../controllers/yelp-restaurants.js";

const router = express.Router();

router.get('/', getAllRestaurants)
router.get('/details/:id', getDetailRestaurant)

export default router
