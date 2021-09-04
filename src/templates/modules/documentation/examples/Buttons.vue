<template>
  <Documentation title="Example of slash command">
    <p>
      In the near future, slash commands will completely replace the "prefixed" commands we all know.
      Even if these "old commands" will still work because they are based on the messageCreate event, it is important to learn how to use this new medium that discord is introducing.
    </p>

    <div class="space-y-5">
      <h2>Basic reply with embed</h2>
      <p>
        Returns the instance of the Discord Client linked to the bot.
      </p>
      <CodeHighlight class="" :code="slashCommandWithEmbed" />
    </div>
  </Documentation>
</template>

<script setup lang="ts">
import Documentation from '../../../../components/Documentation.vue'
import CodeHighlight from '../../../../components/CodeHighlight.vue'

const slashCommandWithEmbed = `
import { Colors } from '@discord-factory/colorize'
import { BaseSlashCommand, SlashCommand } from '@discord-factory/core'
import { CommandInteraction, TextChannel, MessageEmbed } from 'discord.js'
import { GuildId, Channel, Role } from 'App/Utils/Settings'

@SlashCommand({
  scope: [GuildId], 👈 // Or 'GLOBAL' if you want to register globally
  options: {
    name: 'send-buttons', 👈 // UpperCase isn't valid, please use lowerCase
    description: 'Sends buttons in the chat',
    options: [],
  },
})
export default class PingCommand implements BaseSlashCommand {
  public async run(interaction: CommandInteraction): Promise<void> {
    // First, we will create two buttons, one "classic" and the other allowing access to a website
    const button = new MessageButton({
      label: My button,
      emoji: '⚡',
      customId: 'myButton',
      style: 'SECONDARY', 👈 // Available 'PRIMARY', 'SECONDARY', 'SUCCESS', 'DANGER'
    })

    const buttonLink = new MessageButton({
      label: 'Go to my website',
      emoji: '🌐',
      url: 'https://discord-factory.com'
    })

    // Then we create a "line" to which we attach our two buttons
    const row = {
      type: 'ACTION_ROW',
      components: [button, buttonLink]  👈 // You cannot define more than 5 components per row
    }

    // Then we send the message an emperor or non-emperor message to the user containing our buttons
    await interaction.reply({
      components: [row]  👈 // You must create a "line" to which you will attach your buttons
      ephemeral: true,  👈 // If you want to send the client-side or server-side message
    })
  }
}`
</script>