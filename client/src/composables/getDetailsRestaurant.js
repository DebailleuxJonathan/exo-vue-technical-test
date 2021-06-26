import {ref} from 'vue'
const getDetails = (id) => {
    const details = ref([])
    const error = ref(null)
    const load = async () => {
        try {
            let data = await fetch(`http://localhost:5000/restaurants/details/${id}`)
            if (!data.ok) {
                throw Error('no data available')
            }
            details.value = await data.json()
        } catch (e) {
            error.value = e.message
        }
    }
    return {details, error, load};
}
export default getDetails
