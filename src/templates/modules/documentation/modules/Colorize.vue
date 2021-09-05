<template>
  <Documentation title="Colorize">
    <p>
      In the near future, slash commands will completely replace the "prefixed" commands we all know.
      Even if these "old commands" will still work because they are based on the messageCreate event, it is important to learn how to use this new medium that discord is introducing.
    </p>

    <div class="space-y-5">
      <h2>How to use</h2>
      <p>
        Returns the instance of the Discord Client linked to the bot.
      </p>
      <CodeHighlight class="" :code="slashCommandWithEmbed" />
    </div>

    <div class="space-y-5">
      <h2>Colour palette</h2>
      <ColorContainer />
    </div>
  </Documentation>
</template>

<script setup lang="ts">
import Documentation from '../../../../components/Documentation.vue'
import CodeHighlight from '../../../../components/CodeHighlight.vue'
import ColorContainer from '../../../../components/ColorContainer.vue'

const slashCommandWithEmbed = `
import { Colors } from '@discord-factory/colorize'

const embed = new MessageEmbed({
  description: 'Description of your embed',
  color: Colors.INVISIBLE,
})`
</script>