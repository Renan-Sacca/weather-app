<template>
  <div class="p-6">
    <h1 class="text-3xl mb-4">Settings</h1>
    <div class="mb-4">
      <label for="unit" class="block text-lg font-medium text-gray-700">Select Temperature Unit:</label>
      <select id="unit" v-model="selectedUnit" @change="saveSettings" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
        <option value="metric">Celsius (°C)</option>
        <option value="imperial">Fahrenheit (°F)</option>
      </select>
    </div>
    <p>Your selected unit: {{ selectedUnit === 'metric' ? 'Celsius' : 'Fahrenheit' }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useSettingsStore } from '../store/settingsStore'

export default {
  name: 'SettingsView',
  setup() {
    const settingsStore = useSettingsStore()
    const selectedUnit = ref(settingsStore.unit)

    const saveSettings = () => {
      settingsStore.setUnit(selectedUnit.value)
    }

    return {
      selectedUnit,
      saveSettings
    }
  }
}
</script>
