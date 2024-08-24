import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    unit: 'metric',
  }),
  actions: {
    setUnit(unit) {
      this.unit = unit
    }
  }
})
