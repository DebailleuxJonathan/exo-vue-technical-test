import express from 'express';
import {getAllRestaurants} from "../controllers/yelp-restaurants.js";

const router = express.Router();

router.get('/', getAllRestaurants)

export default router
