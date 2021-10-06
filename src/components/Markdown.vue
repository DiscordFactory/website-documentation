<template>
  <div class="markdown-viewer" v-html="content"></div>
</template>

<script setup lang='ts'>
import MarkdownIt from 'markdown-it'
import Emogi from 'markdown-it-emoji'
import MarkdownItHighlightjs from 'markdown-it-highlightjs'
import Anchor from 'markdown-it-anchor'
import MarkdownContainer from 'markdown-it-container'
import { onMounted, onUpdated, ref } from 'vue'

interface Props {
  source: string
}

const props = defineProps<Props>()
const content = ref('')

function render () {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
  })
    .use(MarkdownItHighlightjs)
    .use(MarkdownContainer, 'warning')
    .use(MarkdownContainer, 'success')
    .use(MarkdownContainer, 'error')
    .use(MarkdownContainer, 'info')
    .use(Anchor)
    .use(Emogi)
  content.value = md.render(props.source)
}

onMounted(() => render())
onUpdated(() => render())
</script>

<style lang="scss">
h1 {
  @apply text-4xl font-bold mb-5 relative;
  &::after {
    content: '';
    @apply absolute bottom-0 left-0 transform translate-y-5 border-b border-gray-700 border-opacity-10 w-full;
  }
}
h6 {
  @apply text-xs -mb-2.5 pt-2 text-gray-700 opacity-75;
}
.markdown-viewer {
  & > p {
    @apply leading-8 pt-5;
    code {
      @apply bg-white dark:bg-gray-600 p-1 rounded-md;
    }
  }

  blockquote {
    @apply relative;
    &::before {
      content: '';
      @apply absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 border-l-4 border-black h-[75%] border-gray-300;
    }
  }

  pre {
    @apply bg-[#263238] rounded-md leading-7 px-3 py-2;
    code {
      @apply text-[14px] text-[#bfbfbf];
      &.language {
        font-family: Jetbrains Mono, Roboto Mono, monospace;
        &-ts {
          .hljs-meta {
            @apply text-[#0f74b9];
          }

          .hljs-keyword, .hljs-built_in {
            @apply text-[#17a7c1];
          }

          .hljs-string {
            @apply text-[#c3e88d];
          }

          .hljs-comment {
            @apply text-[#546e7a];
          }

          .hljs-subst {
            @apply text-[#bfbfbf];
          }
        }
        &-bash {
          .hljs-comment {
            @apply text-[#546e7a];
          }
        }
        &-dockerfile {
          .hljs-keyword {
            @apply text-[#17a7c1];
          }

          .hljs-string {
            @apply text-[#c3e88d];
          }

          .hljs-comment {
            @apply text-[#546e7a];
          }
        }
        &-yaml {
          .hljs-attr {
            @apply text-[#17a7c1];
          }
          .hljs-comment {
            @apply text-[#546e7a];
          }
        }
        &-json {
          .hljs-attr {
            @apply text-[#17a7c1];
          }
          .hljs-string {
            @apply text-[#c3e88d];
           }
          .hljs-comment {
            @apply text-[#546e7a];
          }
          .hljs-literal {
            @apply text-blue-200;
          }
        }
      }
    }
  }
  .warning {
    @apply rounded-md bg-yellow-50 dark:bg-yellow-500 border border-yellow-400 dark:border-yellow-900 w-1/2 flex flex-col p-4 my-5 relative;
    &::before {
      content: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /> </svg>');
      @apply absolute transform left-0 translate-x-3 block h-6 w-6;
    }
    p {
      @apply pl-8 text-sm font-medium text-yellow-800 dark:text-yellow-900 flex items-center;
      & > code {
        @apply bg-yellow-100 dark:opacity-50 py-0.5 px-1 mx-1 rounded-md;
      }
    }
    & > ul {
      @apply pl-8 text-sm text-yellow-800 dark:text-yellow-900 space-y-3;
      li {
        @apply leading-5;
        &::before {
          content: '• ';
        }
      }
      code {
        @apply bg-yellow-100 dark:opacity-50 py-0.5 px-1 mx-1 rounded-md;
      }
    }
  }
  .error {
    @apply rounded-md bg-red-50 dark:bg-red-600 border border-red-400 dark:border-red-900 w-1/2 flex p-4 my-5 relative;
    &::before {
      content: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>');
      @apply absolute transform left-0 translate-x-3 block h-6 w-6;
    }
    p {
      @apply pl-8 text-sm font-medium text-red-800 dark:text-red-900 flex items-center;
      & > code {
        @apply bg-red-100 dark:opacity-50 py-0.5 px-1 mx-1 rounded-md;
      }
    }
  }
  .success {
    @apply rounded-md bg-green-50 dark:bg-green-500 border border-green-400 dark:border-green-900 w-1/2 flex p-4 my-5 relative;
    &::before {
      content: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>');
      @apply absolute transform left-0 translate-x-3 block h-6 w-6;
    }
    p {
      @apply pl-8 text-sm font-medium text-green-800 dark:text-green-900;
      & > code {
        @apply bg-green-100 dark:opacity-50 py-0.5 px-1 mx-1 rounded-md;
      }
    }
  }
  .info {
    @apply rounded-md bg-blue-50 dark:bg-blue-500 border border-blue-400 dark:border-blue-900 w-1/2 flex flex-col p-4 my-5 relative;
    &::before {
      content: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>');
      @apply absolute transform left-0 translate-x-3 block h-6 w-6;
    }
    p {
      @apply pl-8 text-sm font-medium text-blue-800 dark:text-blue-900;
      & > code {
        @apply bg-blue-100 dark:opacity-50 py-0.5 px-1 mx-1 rounded-md;
      }
    }
    & > ul {
      @apply pl-8 text-sm text-yellow-800 dark:text-yellow-900 space-y-3;
      li {
        @apply leading-5;
        &::before {
          content: '• ';
        }
      }
      code {
        @apply bg-yellow-100 dark:opacity-50 py-0.5 px-1 mx-1 rounded-md;
      }
    }
  }
}
</style>