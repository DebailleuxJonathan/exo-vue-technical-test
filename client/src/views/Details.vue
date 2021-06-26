<template v-if="details">
    <div class="flex justify-center mb-20">
        <h1 class="text-4xl">{{ details.name }}</h1>
    </div>
    <div class="flex flex-col mb-20">
        <div class="text-2xl flex w-full items-center mb-20 p-3 bg-gray-200 justify-around rounded-xl">
            <div class="flex flex-col w-full justify-center items-center">
                <div class="flex flex-col w-max text-left">
                    <div class="mb-5" v-if="location"><p v-for="address in details.location.display_address"> {{ address }} </p>
                    </div>
                    <p>{{ details.phone }}</p>

                </div>
            </div>
            <div class="w-full flex flex-col items-center justify-center">
                <div class="flex items-center">
                    <Stars :restaurant="details"/>
                </div>
                <div class="flex flex-row justify-center w-full">
                    <span class="mr-4 p-2 bg-gray-400 rounded-2xl text-xs text-white"
                          v-for="category in details.categories" :key="category">{{ category.title }}</span>
                </div>
                <p>price : {{ details.price }}</p>
                <a :href="details.url" target="_blank"
                   class="sm:mt-1 sm:w-full py-1 px-2 bg-gray-600 w-full sm:w-max rounded text-white transition-all duration-300 hover:bg-gray-900">Order</a>
            </div>
        </div>
        <HoursComponent class="flex justify-center sm:rounded-l-none" :details="details"/>
    </div>
    <div class="flex h-64">
        <div v-for="(photo) in details.photos" :key="photo">
            <img class="w-full h-full object-cover" :src="photo" alt="">
        </div>
    </div>
</template>

<script>
    import getDetails from "../composables/getDetailsRestaurant";
    import HoursComponent from "../components/HoursComponent";
    import Stars from "../components/Stars";

    export default {
        name: "Details",
        components: {Stars, HoursComponent},
        props: ['id'],
        setup(props) {
            const {details, error, load} = getDetails(props.id)
            load()
            return {details, error}
        },
        computed: {
            location() {
                return this.details.location
            }
        }
    }
</script>

<style scoped>

</style>
