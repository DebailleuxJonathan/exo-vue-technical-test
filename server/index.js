import cors from 'cors';
import restaurantRoutes from './routes/yelp-restaurants.js'
import express from 'express'
const app = express();
const PORT  = process.env.PORT || 5000

app.use(cors())

app.use('/restaurants', restaurantRoutes)

app.listen(PORT)
