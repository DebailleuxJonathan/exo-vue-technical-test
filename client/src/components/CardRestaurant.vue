<template>
    <div class="w-max mx-auto flex flex-col items-center">
        <div v-if="restaurants" class="container border border-gray-200 m-2 rounded-2xl flex flex-col"
             v-for="restaurant in restaurants" :key="restaurant">
            <div>
                <div class="p-2 text-left font-bold"><h2 class="text-2xl">{{restaurant.name}}</h2></div>
            </div>
            <div class="flex p-2 w-full bg-gray-100 rounded-b-2xl">
                <div class="items-center flex p-2">
                    <img class="w-52 h-52 object-cover rounded-xl" :src="restaurant.image_url" alt="">
                </div>
                <div class="w-full p-5 items-start flex flex-col justify-around">
                    <div class="flex justify-between w-full">
                        <div class="text-left">
                            <div class="flex items-center">
                                <svg v-for="star in parseInt(restaurant.rating)" :key="star"
                                     class=" w-4 h-4 fill-current text-yellow-500"
                                     xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                </svg>
                                <svg v-for="star1 in 5 - parseInt(restaurant.rating)" :key="star1"
                                     class=" w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                </svg>
                                <p class="ml-2">{{restaurant.review_count}}</p>
                            </div>
                        </div>
                        <div class="self-center">
                            <p>{{ restaurant.price }}</p>
                        </div>
                    </div>
                    <div class="flex flex-row w-full" >
                        <span class="mr-4 p-2 bg-gray-400 rounded-2xl text-xs text-white" v-for="categorie in restaurant.categories" :key="categorie">{{categorie.title }}</span>
                    </div>
                    <div class="flex items-center justify-between w-full">
                        <div class="text-left">
                            <p>{{ restaurant.location.address1 }}</p>
                            <p>{{ restaurant.location.city }} - {{restaurant.location.zip_code }}</p>
                            <p>{{ Math.floor(restaurant.distance)/1000 }} km</p>
                        </div>
                        <div>
                            <a class="p-3 bg-gray-600 rounded text-white" :href="restaurant.url">Order to restaurant</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "CardRestaurant",
        props: ['restaurants']
    }
</script>

<style scoped>

</style>
