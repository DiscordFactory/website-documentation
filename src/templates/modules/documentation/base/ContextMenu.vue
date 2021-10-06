<template>
  <Documentation>
    <Markdown v-if="data" :source="data" />
    <Spinner v-else />
  </Documentation>
</template>

<script setup lang="ts">
import Markdown from '../../../../components/Markdown.vue'
import Documentation from '../../../../components/Documentation.vue'
import Spinner from '../../../../components/Spinner.vue'
import useDocumentation from '../../../../services/Documentation'
import { markdownEndpoint } from '../../../../utils/Navigation'
import { onMounted, ref } from 'vue'

const data = ref('')
onMounted(async () => {
  data.value = await useDocumentation(markdownEndpoint.CONTEXT_MENU)
})
</script>