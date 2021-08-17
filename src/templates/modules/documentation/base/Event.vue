<template>
  <Documentation title="Events">
    <p>
      The design of a discord bot spends most of the time developing commands.
      The purpose of these commands is to execute certain actions by the moderation or the community. Creating an event with the framework is very simple.
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
  </Documentation>
</template>

<script setup lang="ts">
import Documentation from '../../../../components/Documentation.vue'
import CodeHighlight from '../../../../components/CodeHighlight.vue'
import Divider from '../../../../components/Divider.vue'
import LinkExternal from '../../../../components/LinkExternal.vue'
import AlertInfo from '../../../../components/AlertInfo.vue'
const file = `
import { Event, BaseEvent } from '@discord-factory/core'
import { GuildMember } from 'discord.js'

@Event('guildMemberAdd')
export default class FooEvent implements BaseEvent {
  public async run(member: GuildMember): Promise<void> {
    // Please go to the documentation in order to know the parameters you can use
    // Your code here
  }
}`
</script>
