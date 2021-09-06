<template>
  <Navbar />
    <main class="pt-[64px] bg-white dark:bg-gray-800 transition duration-300 min-h-screen pb-10">
      <RouterView />
      <button
        @click.prevent="toggle()"
        class="fixed z-50 bottom-5 left-5 w-10 h-10 border-2 rounded focus:outline-none"
        :class="isDark() ? 'bg-gray-800 border-white' : 'bg-white border-gray-800'">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg v-if="isDark()" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
      </button>
    </main>
  <Footer />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'

let htmlStatut = ref(false)
onMounted(() => {
  htmlStatut.value = document.documentElement.classList.contains('dark')
})

const route = useRoute()
onMounted(() => $route.path, () => {
  console.log('test')
})

function toggle () {
  const htmlRoot = document.documentElement as HTMLElement
  htmlRoot.classList.contains('dark')
    ? htmlRoot.classList.remove('dark')
    : document.documentElement.classList.add('dark')

  htmlStatut.value = document.documentElement.classList.contains('dark')
}

function isDark () {
  return htmlStatut.value
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;700&display=swap');
html, body {
  font-family: 'Public Sans', sans-serif;
  scroll-behavior: smooth;
}

</style>
