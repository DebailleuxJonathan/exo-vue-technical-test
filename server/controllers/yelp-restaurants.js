import express from 'express';
import yelp from 'yelp-fusion';
import env from 'dotenv'

const router = express.Router();
env.config();

export const getAllRestaurants = async (req, res) => {
    const client = yelp.client(process.env.API_KEY)
    client.search({
        term: 'restaurants',
        location: "paris",
    }).then(response => {
        res.send(response.jsonBody)
    }).catch(e => {
        console.log(e);
    });
}

export const getDetailRestaurant = async (req, res) => {
    const client = yelp.client(process.env.API_KEY)
    client.business(req.params.id).then(response => {
        res.send(response.jsonBody)
    }).catch(e => {
        console.log(e);
    });
}

export default router
