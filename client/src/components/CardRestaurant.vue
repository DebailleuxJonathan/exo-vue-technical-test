<template>
    <div class="w-screen p-2 sm:w-max mx-auto flex flex-col items-center">
        <div v-if="restaurants" class="container border border-gray-200 m-2 rounded-2xl flex flex-col"
             v-for="restaurant in restaurants" :key="restaurant">
            <div>
                <div class="p-2 text-left font-bold"><h2 class="text-2xl">{{restaurant.name}}</h2></div>
            </div>
            <div class="flex sm:flex-row flex-col p-2 w-full bg-gray-100 rounded-b-2xl">
                <div class="items-center flex p-2">
                    <img class="w-full sm:w-52 h-52 object-cover rounded-xl" :src="restaurant.image_url" alt="">
                </div>
                <div class="w-full p-5 items-start flex flex-col sm:justify-around">
                    <div class="flex items-center flex-row justify-between w-full">
                        <div class="text-left">
                            <div class="flex items-center">
                               <Stars :restaurant="restaurant" />
                            </div>
                        </div>
                        <div class="self-center">
                            <p>{{ restaurant.price }}</p>
                        </div>
                    </div>
                    <div class="flex flex-row justify-start w-full" >
                        <span class="mr-4 p-2 bg-gray-400 rounded-2xl text-xs text-white" v-for="categorie in restaurant.categories" :key="categorie">{{categorie.title }}</span>
                    </div>
                    <div class="flex sm:flex-row flex-col items-center sm:justify-between w-full">
                        <div class="text-left flex flex-col justify-around w-full">
                            <p>{{ restaurant.location.address1 }}</p>
                            <p>{{ restaurant.location.city }} - {{restaurant.location.zip_code }}</p>
                            <p>{{ Math.floor(restaurant.distance)/1000 }} km</p>
                        </div>
                        <div class="flex sm:flex-col items-center justify-around w-5/12">
                            <a class="sm:mb-1 sm:w-full py-1 px-2 bg-gray-600 rounded text-white text-sm transition-all duration-300 hover:bg-gray-900" :href="restaurant.url">Order</a>
                            <router-link class="sm:mt-1 sm:w-full py-1 px-2 bg-gray-600 rounded text-white text-sm transition-all duration-300 hover:bg-gray-900" :to="{name: 'Details', params:{id: restaurant.id}}">
                            Details
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Stars from "./Stars";
    export default {
        name: "CardRestaurant",
        components: {Stars},
        props: ['restaurants']
    }
</script>

<style scoped>

</style>
