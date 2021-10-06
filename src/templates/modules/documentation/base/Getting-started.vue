<template>
  <Documentation>
    <div class="getting-started">
      <Markdown v-if="data" :source="data" />
      <Spinner v-else />
    </div>
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
  data.value = await useDocumentation(markdownEndpoint.GETTING_STARTED)
})
</script>

<style lang="scss">
.getting-started {
  .markdown-viewer {
    & > img {
      @apply w-1/3;
    }
    & > p {
      @apply flex space-x-2;
      code {
        @apply bg-red-500;
      }
    }
    blockquote {
      code {
        @apply bg-white dark:bg-gray-600 p-1 rounded-md;
      }
    }
  }
}
</style>