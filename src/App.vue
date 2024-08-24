<template>
  <div id="app">
    <nav class="bg-gray-800 p-4">
      <ul class="flex space-x-4">
        <li>
          <router-link to="/" class="text-white">Home</router-link>
        </li>
        <li>
          <router-link to="/favorites" class="text-white">Favorites</router-link>
        </li>
        <li>
          <router-link to="/settings" class="text-white">Settings</router-link>
        </li>
      </ul>
    </nav>
    <div class="container mx-auto p-4">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
