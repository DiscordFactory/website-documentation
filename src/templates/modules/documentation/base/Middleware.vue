<template>
  <Documentation title="Middlewares">
    <p>
      When creating commands, it is very common to have to perform a check before the execution of the command in order to verify,
      for example, if the executor of the command has a specific role, required permissions (non-exhaustive list).
    </p>
    <p>
      These checks are usually recurring from command to command and must be duplicated which goes against the Don't Repeat Yourself principle.<br>
      The role of middleware is to create a file that can be reused at will and used by any command that requires recurring checks.
    </p>
    <p>
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
          Choose to create a middleware and then answer the questions you will be asked. It is important to note that when you define the file name, you can "place" the file in folders by specifying a path directory in addition to the file name as in the following example :
        </template>
      </AlertInfo>
    </div>

    <div class="space-y-5">
      <h2>Default middleware file</h2>
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
import { Middleware, BaseMiddleware, MiddlewareContext } from '@discord-factory/core'

@Middleware({ pattern: 'YourRegexPattern')}
export default class FooMiddleware implements BaseMiddleware {
  public async run(context: MiddlewareContext): Promise<void> {
    // Your code here
  }
}`
</script>
