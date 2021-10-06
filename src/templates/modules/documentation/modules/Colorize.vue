<template>
  <Documentation>
    <template v-if="data">
      <Markdown :source="data" />
      <div class="space-y-5">
        <h2>Colour palette</h2>
        <ColorContainer />
      </div>
    </template>
    <Spinner v-else />
  </Documentation>
</template>

<script setup lang="ts">
import Markdown from '../../../../components/Markdown.vue'
import Documentation from '../../../../components/Documentation.vue'
import ColorContainer from '../../../../components/ColorContainer.vue'
import Spinner from '../../../../components/Spinner.vue'
import useDocumentation from '../../../../services/Documentation'
import { markdownEndpoint } from '../../../../utils/Navigation'
import { onMounted, ref } from 'vue'

const data = ref('')
onMounted(async () => {
  data.value = await useDocumentation(markdownEndpoint.COLORIZE)
})
</script>