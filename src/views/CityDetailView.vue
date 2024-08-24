<template>
  <div class="p-6">
    <h1 class="text-3xl mb-4">{{ city.name }}</h1>
    <p><strong>Temperature:</strong> {{ (city.main.temp - 273.15).toFixed(2) }} °C</p>
    <p><strong>Weather:</strong> {{ city.weather[0].description }}</p>
    <p><strong>Humidity:</strong> {{ city.main.humidity }}%</p>
    <p><strong>Wind Speed:</strong> {{ city.wind.speed }} m/s</p>
    <router-link to="/" class="text-blue-500 mt-4 inline-block">Back to Search</router-link>
  </div>
</template>

<script>
import { useWeatherStore } from '../store'

export default {
  name: 'CityDetailView',
  setup(props) {
    const weatherStore = useWeatherStore()
    const city = weatherStore.cities.find(city => city.name === props.name)

    return {
      city
    }
  },
  props: ['name']
}
</script>
