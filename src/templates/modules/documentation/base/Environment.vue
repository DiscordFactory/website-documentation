<template>
  <Documentation title="Environment">
    <p>
      The environment file contains information confidential to your application such as your token. You must not disclose it under any circumstances.
      The Discord Factory framework offers you the possibility to choose between 3 types of files :
    </p>
    <ul>
      <li>• Json</li>
      <li>• Yaml</li>
    </ul>

    <p>
      In order to meet the widest variety of needs, each environment file can be extended by adding your own elements such as messages, etc...
    </p>

    <h2>Why an environment file</h2>
    <p>
      The environment file is crucial for several reasons, it contains all the sensitive information of the project and should never be versioned on git.
      The use of an environment file allows when using container managers (such as docker, kubernetes) to adapt the startup data to the production environment.
    </p>
    <p>
      When you create a new project, you can choose between three types of environment :
    </p>

    <!--  -->
    <div>
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
          <option
            v-for="tab in tabs"
            :key="tab.name"
            :selected="tab.current">
            {{ tab.name }}
          </option>
        </select>
      </div>
      <div class="hidden sm:block space-y-5 ">
        <nav class="flex space-x-4" aria-label="Tabs">
          <button
            v-for="tab in tabs"
            @click.prevent="changeTab(tab.id)"
            :class="[tab.id === activeTab ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700', 'px-3 py-2 font-medium text-sm rounded-md cursor-pointer focus:outline-none']"
            :aria-current="activeTab || undefined"
            :key="tab.name">
            {{ tab.name }}
          </button>
        </nav>
        <div v-if="activeTab === 'yaml'">
          <CodeHighlight :code="yaml" />
        </div>
        <div v-if="activeTab === 'json'">
          <CodeHighlight :code="json" />
        </div>
      </div>
    </div>

    <!--<div>-->
    <!--  <h3>json</h3>-->
    <!--  <CodeHighlight :code="json" />-->
    <!--</div>-->
    <!--<div>-->
    <!--  <h3>yaml</h3>-->
    <!--  <CodeHighlight :code="yaml" />-->
    <!--</div>-->

    <!--<h2>Retrieving environment variables</h2>-->
    <!--<CodeHighlight :code="getClient" />-->

  </Documentation>
</template>

<script setup lang="ts">
import Documentation from '../../../../components/Documentation.vue'
import CodeHighlight from '../../../../components/CodeHighlight.vue'
import Divider from '../../../../components/Divider.vue'
import LinkExternal from '../../../../components/LinkExternal.vue'
import AlertWarn from '../../../../components/AlertWarn.vue'
import AlertSuccess from '../../../../components/AlertSuccess.vue'
import AlertInfo from '../../../../components/AlertInfo.vue'
import { ref } from 'vue'

const tabs = [
  { id: 'yaml', name: 'YAML', href: '#' },
  { id: 'json', name: 'JSON', href: '#' },
]

const activeTab = ref('yaml')

function changeTab (identifier: string) {
  activeTab.value = identifier
}

const json = `
{
  "APP_TOKEN": "your prefix",
  "APP_PREFIX": "your token",
  "PARTIALS": [
    "MESSAGE",
    "CHANNEl",
    "REACTION"
  ],
  "INTENTS": [
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILD_BANS",
    "GUILD_EMOJIS_AND_STICKERS",
    "GUILD_INTEGRATIONS",
    "GUILD_WEBHOOKS",
    "GUILD_INVITES",
    "GUILD_VOICE_STATES",
    "GUILD_PRESENCES",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_MESSAGE_TYPING",
    "DIRECT_MESSAGES",
    "DIRECT_MESSAGE_REACTIONS",
    "DIRECT_MESSAGE_TYPING",
  ],
  "PRESETS": {
    "COMMAND_AUTO_REMOVE": true
  },
  "MESSAGES": {
    "COMMAND_MISSING_PERMISSION": "You're not authorized to execute this command",
    "COMMAND_MISSING_ROLES": "You're not authorized to execute this command",
    "ENVIRONMENT_FILE_PREFIX_MISSING": "The prefix is missing in the environment file.",
    "ENVIRONMENT_FILE_TOKEN_MISSING": "The token is missing in the environment file.",
    "ENVIRONMENT_FILE_MISSING": "Environment file is missing, please create one."
  }
}
`

const yaml = `
APP_TOKEN: your token
APP_PREFIX: your prefix
PARTIALS:
  - MESSAGE
  - CHANNEL
  - REACTION
INTENTS:
  - GUILDS
  - GUILD_MEMBERS
  - GUILD_BANS
  - GUILD_EMOJIS_AND_STICKERS
  - GUILD_INTEGRATIONS
  - GUILD_WEBHOOKS
  - GUILD_INVITES
  - GUILD_VOICE_STATES
  - GUILD_PRESENCES
  - GUILD_MESSAGES
  - GUILD_MESSAGE_REACTIONS
  - GUILD_MESSAGE_TYPING
  - DIRECT_MESSAGES
  - DIRECT_MESSAGE_REACTIONS
  - DIRECT_MESSAGE_TYPING
PRESETS:
  COMMAND_AUTO_REMOVE: true
MESSAGES:
  COMMAND_MISSING_PERMISSION: You're not authorized to execute this command
  COMMAND_MISSING_ROLES: You're not authorized to execute this command
  ENVIRONMENT_FILE_PREFIX_MISSING: The prefix is missing in the environment file.
  ENVIRONMENT_FILE_TOKEN_MISSING: The token is missing in the environment file.
  ENVIRONMENT_FILE_MISSING: Environment file is missing, please create one.
DATABASE:
  DRIVER: SQLite
  PATH: database.sql`

const getClient = `
import { Application } from '@discord-factory/core'

const environment = Application.getEnvironment('APP_PREFIX')
console.log(environment) // '!'
`
</script>
