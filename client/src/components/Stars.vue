<template>
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
</template>

<script>
    export default {
        name: "Stars",
        props:['restaurant']
    }
</script>

<style scoped>

</style>
