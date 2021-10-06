<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-gray-800 rounded-xl overflow-hidden">
    <img class="absolute" src="../assets/discord-background.png" alt="Workflow" />
    <div class="absolute inset-0 bg-black opacity-25"></div>
    <div class="relative z-10 max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          Why wait to join us ?
        </h2>
        <p class="mt-3 text-xl text-indigo-200 sm:mt-4">
          The success of our platform is reflected in our figures
        </p>
      </div>
      <dl class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
        <div class="flex flex-col">
          <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
            Users
          </dt>
          <dd class="order-1 text-5xl font-extrabold text-white">
            {{ state.userCount }}
          </dd>
        </div>
        <div class="flex flex-col mt-10 sm:mt-0">
          <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
            Projects
          </dt>
          <dd class="order-1 text-5xl font-extrabold text-white">
            {{ state.projectCount }}
          </dd>
        </div>
        <div class="flex flex-col mt-10 sm:mt-0">
          <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
            <p>Online discord</p>
            <p>members</p>
          </dt>
          <dd class="order-1 text-5xl font-extrabold text-white">
            {{ state.discord.presence_count }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import axios from 'axios'
import { DateTime } from 'luxon'

const state = reactive({
  userCount: 0,
  projectCount: 0,
  discord: {}
})

async function getData () {
  const now = DateTime.now().toFormat('yyyy-MM-dd')
  const { data: users } = await axios.get(`https://api.npmjs.org/downloads/point/2021-09-01:${now}/create-factory-app`)
  const { data: projects } = await axios.get(`https://api.npmjs.org/downloads/point/2021-09-01:${now}/@discord-factory/core`)
  const { data: discord } = await axios.get('https://discord.com/api/guilds/874056537444859984/widget.json')

  state.userCount = users.downloads
  state.projectCount = projects.downloads
  state.discord = discord
}

getData()

</script>