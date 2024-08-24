<template>
  <div class="p-6">
    <h1 class="text-3xl mb-4">Search for a City</h1>
    <input v-model="searchQuery" @keyup.enter="searchCity" placeholder="Enter city name" class="border p-2 rounded w-full mb-4">
    
    <!-- Exibe a mensagem de erro se houver -->
    <div v-if="error" class="text-red-500 mb-4">
      {{ error }}
    </div>

    <!-- Exibe os resultados das cidades se houver -->
    <div v-if="cities.length">
      <h2 class="text-xl mb-2">Results (in {{ settingsStore.unit === 'metric' ? 'Celsius' : 'Fahrenheit' }}):</h2>
      <ul>
        <li v-for="city in cities" :key="city.id" class="mb-2">
          <router-link :to="{ name: 'CityDetail', params: { name: city.name }}">
            {{ city.name }} - {{ city.main.temp }}°{{ settingsStore.unit === 'metric' ? 'C' : 'F' }} - {{ city.weather[0].description }}
          </router-link>
          <button @click="addFavorite(city)" class="ml-2 text-blue-500">Add to Favorites</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useWeatherStore } from '../store'
import { useSettingsStore } from '../store/settingsStore'

export default {
  name: 'HomeView',
  setup() {
    const weatherStore = useWeatherStore()
    const settingsStore = useSettingsStore()
    const searchQuery = ref('')
    const error = ref(null)

    const searchCity = async () => {
      error.value = null
      if (searchQuery.value) {
        try {
          await weatherStore.searchCity(searchQuery.value, settingsStore.unit)
        } catch (err) {
          error.value = "City not found. Please check the name and try again."
        }
        searchQuery.value = ''
      }
    }

    return {
      searchQuery,
      cities: weatherStore.cities,
      searchCity,
      addFavorite: weatherStore.addFavorite,
      settingsStore,
      error
    }
  }
}
</script>
