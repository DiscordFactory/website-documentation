<template>
  <Documentation title="Slash commands">
    <p>
      The version 13 update of discord.js marks the arrival of Slash Commands.<br>This new feature provides real support for developers who want to create commands on their bots.

      It was announced by Discord that they will gradually replace the old command system that we all knew based on the presence of a prefix as the first character of a message with this new suppo
    </p>

    <div class="space-y-5">
      <h2>Create new slash command from CLI</h2>
      <p>
        Open a new terminal in your project and write the following command :
      </p>
      <CodeHighlight class="w-min" code="$ factory make:file" />
      <AlertInfo>
        <template v-slot:label>
          Info
        </template>
        <template v-slot:message>
          Choose to create a command and then answer the questions you will be asked. It is important to note that when you define the file name, you can "place" the file in folders by specifying a path directory in addition to the file name as in the following example.
        </template>
      </AlertInfo>
    </div>

    <div class="space-y-5">
      <h2>Default command file</h2>
      <p>
        A file will be created in the specified location otherwise in the root of your project with the following structure :
      </p>
      <CodeHighlight class="w-min" :code="file" />
    </div>
    <div class="space-y-5">
      <h2>Decorator options</h2>
      <p>
        A file will be created in the specified location otherwise in the root of your project with the following structure :
      </p>
      <CodeHighlight class="w-min" :code="decorator" />
      <p>
        See more about ApplicationCommandOption <LinkExternal url="https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandOption">here</LinkExternal>
      </p>
    </div>
  </Documentation>
</template>

<script setup lang="ts">
import Documentation from '../../../../components/Documentation.vue'
import CodeHighlight from '../../../../components/CodeHighlight.vue'
import Divider from '../../../../components/Divider.vue'
import LinkExternal from '../../../../components/LinkExternal.vue'
import AlertInfo from '../../../../components/AlertInfo.vue'
import Hightlight from '../../../../components/Hightlight.vue'

const file = `
import { BaseSlashCommand, SlashCommand } from '@discord-factory/core'
import { CommandInteraction } from 'discord.js'

@SlashCommand({
  scope: ['your guild id'], 👈 // Or 'GLOBAL' if you want to register globally
  options: {
    name: 'foo', 👈 // UpperCase isn't valid, please use lowerCase
    description: 'Your foo command description',
    options: [],
  },
})
export default class FooCommand implements BaseSlashCommand {
  public async run(interaction: CommandInteraction): Promise<void> {
    // Your code here
  }
}`

const decorator = `
export interface SlashCommandInterface {
  scope: 'GLOBAL' | Snowflake[], 👈 // Or 'GLOBAL' if you want to register globally
  roles: Snowflake[],
  options: {
    name: string, 👈 // UpperCase isn't valid, please use lowerCase
    description: string,
    options: ApplicationCommandOption[],
  }
}`
</script>
