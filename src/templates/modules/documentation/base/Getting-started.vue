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
    display: block !important;
    & > p:nth-child(2), & > p:last-child, & > p:nth-last-child(3) {
      @apply flex md:flex-wrap md:space-x-2 overflow-x-scroll;
    }
    & > img {
      @apply md:w-1/3;
    }
    & > p {
      @apply md:flex-wrap md:space-x-2 overflow-x-scroll;
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