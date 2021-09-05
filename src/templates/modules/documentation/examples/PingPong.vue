<template>
  <Documentation title="Example of slash command">
    <p>
      In the near future, slash commands will completely replace the "prefixed" commands we all know.
      Even if these "old commands" will still work because they are based on the messageCreate event, it is important to learn how to use this new medium that discord is introducing.
    </p>

    <div class="space-y-5">
      <h2>Basic reply with embed</h2>
      <p>
        First, we need to create an enumeration that will contain our different channels and their associated ID.
      </p>
      <CodeHighlight class="" :code="enum1" />

      <p>
        Next, we create the command using the slash command support of discord.js 13.
      </p>
      <CodeHighlight class="" :code="slashCommandWithEmbed" />
    </div>
  </Documentation>
</template>

<script setup lang="ts">
import Documentation from '../../../../components/Documentation.vue'
import CodeHighlight from '../../../../components/CodeHighlight.vue'

const enum1 = `
export const GuildId = '583050048766476353'

export enum Channel {
  COMMAND = '583050048766476355'
}
`

const slashCommandWithEmbed = `
import { Colors } from '@discord-factory/colorize'
import { BaseSlashCommand, SlashCommand } from '@discord-factory/core'
import { CommandInteraction, TextChannel, MessageEmbed } from 'discord.js'
import { GuildId, Channel, Role } from 'App/Utils/Settings'

@SlashCommand({
  scope: [GuildId], 👈 // Or 'GLOBAL' if you want to register globally
  options: {
    name: 'ping', 👈 // UpperCase isn't valid, please use lowerCase
    description: 'Answer pong when the bot returns an answer',
    options: [],
  },
})
export default class PingCommand implements BaseSlashCommand {
  public async run(interaction: CommandInteraction): Promise<void> {
    // First, we design the structure of the embed
    const embed = new MessageEmbed({
      description: 'Pong !',
      color: Colors.INVISIBLE,
    })

    // Then we send the message an emperor or non-emperor message to the user containing our embed
    await interaction.reply({
      embed: [embed]
      ephemeral: true,  👈 // If you want to send the client-side or server-side message
    })
  }
}`
</script>