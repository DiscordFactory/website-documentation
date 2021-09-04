<template>
  <Documentation title="Hooks">
    <p>
      Hooks are hooks at certain points in the application's life cycle. You can add specific behaviours to them according to your needs, such as a filter that allows you to delete any message that contains an insult.

      Creating a command with the framework is very simple.
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
          Choose to create a hook and then answer the questions you will be asked. It is important to note that when you define the file name, you can "place" the file in folders by specifying a path directory in addition to the file name as in the following example :
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
      <h2>Issuing of events</h2>
      <p>
        Open a new terminal in your project and write the following command :
      </p>
      <img class="" src="../../../../assets/application-lifecycle.svg" alt="Workflow" />
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
import { Hook, BaseHook, HookContext } from '@discord-factory/core'

@Hook('app::command::received')
export default class FooHook implements BaseHook {
  public async run(context: HookContext): Promise<void> {
    // Your code here
  }
}`
</script>
