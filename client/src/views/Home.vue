<template>
  <h1 class="text-4xl">List of restaurants</h1>
  <CardRestaurant :restaurants="restaurants" />
</template>

<script>
  // @ is an alias to /src
  import getRestaurants from "../composables/getRestaurants";
  import CardRestaurant from "../components/CardRestaurant";

  export default {
    name: 'Home',
    components: {CardRestaurant},
    setup() {
      const {restaurants, error, load} = getRestaurants()
      load()
      return {restaurants, error}
    }
  }
</script>
