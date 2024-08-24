import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    cities: [],
    favorites: [],
    apiKey: '5aa0c5482933f66a311ff6723d4c0b96',
  }),
  actions: {
    async searchCity(cityName, unit) {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${this.apiKey}`);
        this.cities.push(response.data);
      } catch (error) {
        console.error("City not found:", error);
        throw error;
      }
    },
    addFavorite(city) {
      if (!this.favorites.some(favorite => favorite.name === city.name)) {
        this.favorites.push(city);
      }
    },
    removeFavorite(cityName) {
      this.favorites = this.favorites.filter(city => city.name !== cityName);
    }
  }
})
