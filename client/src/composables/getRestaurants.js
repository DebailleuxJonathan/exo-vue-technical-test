import {ref} from 'vue'

const getRestaurants = () => {
    const restaurants = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch(`http://localhost:5000/restaurants`)
            if (!data.ok) {
                throw Error('no data available')
            }

            let dataJson = await data.json()

            for (let i = 0; i < dataJson.businesses.length; i++) {
                await restaurants.value.push(dataJson.businesses[i])
            }

        } catch (e) {
            error.value = e.message
        }
    }
    return {restaurants, error, load};
}
export default getRestaurants
