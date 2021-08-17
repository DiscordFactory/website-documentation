<template>
  <Documentation title="Starting">
    <p>
      Installing a framework to use it is not always obvious because of the configuration that the developer must make.
    </p>
    <p>
      Unfortunately there is currently no equivalent to automatically create the project. (But we are thinking about it! 😐)
    </p>
    <h2>Factory, the interactive ordering guest</h2>
    <p>
      Let's get to the heart of the matter.<br>
      In order to develop with the framework, you need to have
      <LinkExternal url="https://nodejs.org/en/download/current">NodeJS (<span class="font-extrabold">v.16+</span>)</LinkExternal>
      installed on your development environment. Then, globally install the CLI Architect of the bot.
    </p>
    <div class="flex items-center space-x-5">
      <CodeHighlight code="npm install -g @discord-factory/command" />
      <p class="text-gray-800">or</p>
      <CodeHighlight code="yarn global add @discord-factory/command" />
    </div>
    <AlertWarn>
      <template v-slot:label>
        Warn
      </template>
      <template v-slot:message>
        It's possible that using YARN to add the CLI globally does not work correctly, in this case please use NPM.
      </template>
    </AlertWarn>

    <h2>Create your first project</h2>
    <p>
      The <span class="font-bold">@discord-factory/command</span> module is a CLI which, in the same way as Artisan for Laravel, will allow you to interact quickly with the bot's functionalities.
      You can now initialize a project very easily with the following command
    </p>
    <CodeHighlight class="w-min" code="$ factory create-project" />
    <p>
      Answer the questions and a blank project will be initialized according to the elements you have defined.
      An .env file will be created, this file must have at least the following data :
    </p>

    <AlertInfo>
      <template v-slot:label>
        Info
      </template>
      <template v-slot:message>
        The <span class="font-bold">prefix</span> key represents the prefix that each message must have in order to be recognised as a command.
      </template>
    </AlertInfo>

    <AlertInfo>
      <template v-slot:label>
        Info
      </template>
      <template v-slot:message>
        The <span class="font-bold">token</span> key is the token of your bot. It should never be disclosed or sent on a versioning platform such as github. An article is available here to know how to recover the token of its bot.
      </template>
    </AlertInfo>

    <h2>Starting your project</h2>
    <p>All you have to do is install the dependencies with the following commands</p>
    <div class="flex items-center space-x-5">
      <CodeHighlight code="$ npm install" />
      <p class="text-gray-800">or</p>
      <CodeHighlight code="$ yarn install" />
    </div>

    <p>
      The Factory framework uses in memory compilation allowing typescript code to be executed directly by ts-node without having to go through a build folder.
      Furthermore, this hot compile allows you to reduce your CPU usage by almost 4 times by reducing the memory cost from <span class="font-bold">~600MB</span> to <span class="font-bold">~170MB</span>.
    </p>

    <div class="flex items-center space-x-5">
      <CodeHighlight code="$ npm run dev" />
      <p class="text-gray-800">or</p>
      <CodeHighlight code="$ yarn dev" />
    </div>
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
</script>
