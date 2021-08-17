<template>
  <Documentation title="Commands">
    <p>
      The design of a discord bot spends most of the time developing commands.
      The purpose of these commands is to execute certain actions by the moderation or the community. Creating a command with the framework is very simple.
    </p>

    <div class="space-y-5">
      <h2>Create new command from CLI</h2>
      <p>
        Open a new terminal in your project and write the following command :
      </p>
      <CodeHighlight class="w-min" code="$ factory make:file" />
      <AlertInfo>
        <template v-slot:label>
          Info
        </template>
        <template v-slot:message>
          Choose to create a command and then answer the questions you will be asked. It is important to note that when you define the file name, you can "place" the file in folders by specifying a path directory in addition to the file name as in the following example :
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
    </div>
  </Documentation>
</template>

<script setup lang="ts">
import Documentation from '../../../../components/Documentation.vue'
import CodeHighlight from '../../../../components/CodeHighlight.vue'
import Divider from '../../../../components/Divider.vue'
import LinkExternal from '../../../../components/LinkExternal.vue'
import AlertInfo from '../../../../components/AlertInfo.vue'
const file = `
import { BaseCommand, Command } from '@discord-factory/core'
import { Message } from 'discord.js'

@Command({ label: 'FooCommand command', description: 'FooCommand description', tag: 'foo' })
export default class FooCommand implements BaseCommand {
  public async run(message: Message, args: string[]): Promise<void> {
    // Your code here
  }
}`

const decorator = `
export interface CommandInterface {
  label: string
  description: string
  tag: string
  alias?: string[]
  usages?: string[]
  roles?: string[]
  permissions?: PermissionResolvable[]
  middlewares?: string[]
}`
</script>
