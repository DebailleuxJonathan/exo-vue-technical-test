import express from 'express';
import yelp from 'yelp-fusion';
import env from 'dotenv'

const router = express.Router();
env.config();

export const getAllRestaurants = async (req, res) => {
    const client = yelp.client(process.env.API_KEY)
    client.search({
        term: 'restaurants',
        location: "485 7th Ave, New York, NY 10018",
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
