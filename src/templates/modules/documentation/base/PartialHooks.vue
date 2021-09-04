<template>
  <Documentation title="Hooks">
    <p>
      The @discord-factory/core module is intended to simplify access to certain resources such as commands,events registered within the instance of your application.
    </p>

    <div class="space-y-5">
      <h2>useClient</h2>
      <p>
        Returns the instance of the Discord Client linked to the bot.
      </p>
      <CodeHighlight class="w-min" :code="useClient" />
    </div>

    <div class="space-y-5">
      <h2>useCommands</h2>
      <p>
        Returns the set of commands registered within the application instance.
      </p>
      <CodeHighlight class="w-min" :code="useCommands" />
    </div>

    <div class="space-y-5">
      <h2>useEvents</h2>
      <p>
        Returns the set of events registered within the application instance.
      </p>
      <CodeHighlight class="w-min" :code="useEvents" />
    </div>

    <div class="space-y-5">
      <h2>useMiddlewares</h2>
      <p>
        Returns the set of middlewares registered within the application instance.
      </p>
      <CodeHighlight class="w-min" :code="useMiddlewares" />
    </div>

    <div class="space-y-5">
      <h2>useHooks</h2>
      <p>
        Returns the set of hooks registered within the application instance.
      </p>
      <CodeHighlight class="w-min" :code="useHooks" />
    </div>

    <div class="space-y-5">
      <h2>useProviders</h2>
      <p>
        Returns the set of providers registered within the application instance.
      </p>
      <CodeHighlight class="w-min" :code="useProviders" />
    </div>
  </Documentation>
</template>

<script setup lang="ts">
import Documentation from '../../../../components/Documentation.vue'
import CodeHighlight from '../../../../components/CodeHighlight.vue'
import Divider from '../../../../components/Divider.vue'
import LinkExternal from '../../../../components/LinkExternal.vue'
import AlertInfo from '../../../../components/AlertInfo.vue'
const useClient = `
import { Application } from '@discord-factory/core'

const client = Application.getClient()
console.log(client)`

const useCommands = `
import { Application } from '@discord-factory/core'

const commands = Application.getCommands()
console.log(commands)`

const useEvents = `
import { Application } from '@discord-factory/core'

const events = Application.getEvents()
console.log(events)`

const useMiddlewares = `
import { Application } from '@discord-factory/core'

const middlewares = Application.getMiddlewares()
console.log(middlewares)`

const useHooks = `
import { Application } from '@discord-factory/core'

const hooks = Application.getHooks()
console.log(hooks)`

const useProviders = `
import { Application } from '@discord-factory/core'

const providers = Application.getProviders()
console.log(providers)`
</script>
