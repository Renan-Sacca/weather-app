<template>
  <div class="p-6">
    <h1 class="text-3xl mb-4">Favorite Cities</h1>
    <ul v-if="favorites.length">
      <li v-for="city in favorites" :key="city.id" class="mb-2">
        <router-link :to="{ name: 'CityDetail', params: { name: city.name }}">
          {{ city.name }} - {{ city.main.temp }}°{{ settingsStore.unit === 'metric' ? 'C' : 'F' }} - {{ city.weather[0].description }}
        </router-link>
        <button @click="removeCityFromFavorites(city.name)" class="ml-2 text-red-500">Remove</button>
      </li>
    </ul>
    <p v-else>No favorites added yet.</p>
  </div>
</template>

<script>
import { useWeatherStore } from '../store'
import { useSettingsStore } from '../store/settingsStore'
import { computed } from 'vue'

export default {
  name: 'FavoritesView',
  setup() {
    const weatherStore = useWeatherStore()
    const settingsStore = useSettingsStore()

    const removeCityFromFavorites = (cityName) => {
      console.log(`Removing city: ${cityName}`)
      weatherStore.removeFavorite(cityName)
    }

    const favorites = computed(() => weatherStore.favorites)

    return {
      favorites,
      removeCityFromFavorites,
      settingsStore
    }
  }
}
</script>
