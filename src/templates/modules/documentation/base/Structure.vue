<template>
  <Documentation title="Structure">
    <p>
      The framework offers a very modular way of structuring your files within your application, the only restriction is that they must be included in the src/ folder as this represents level 0 of your application (also called root directory).
    </p>
    <CodeHighlight :code="structure" />

    <div class="space-y-5">
      <h2>Folder start</h2>
      <p>
        This folder contains the files needed to start the application.<br>
        You will find the index, the entry point of the application which initializes the application.
      </p>
      <CodeHighlight :code="startFolder" />
      <AlertInfo>
        <template v-slot:label>
          Info
        </template>
        <template v-slot:message>
          The <span class="font-bold">index.ts</span> file in the <span class="font-bold">start folder</span> is the entry point for your application.
        </template>
      </AlertInfo>
    </div>

    <div class="space-y-5">
      <h2>Folder provider</h2>
      <p>
        Providers are files that have certain methods defined in advance.<br>
        You can create them at will as long as they are built in the following way :
      </p>
      <CodeHighlight :code="providerFolder" />
      <AlertInfo>
        <template v-slot:label>
          Info
        </template>
        <template v-slot:message>
          You can create as many providers as you like, they will be executed in alphabetical order. You can learn more here.
        </template>
      </AlertInfo>
      <p>
        These files are read first, even before the recovery of the command files, events...
        It can be very interesting to use them to record a default behaviour before the application is ready to run.
      </p>
      <p>
        A concrete example would be the console display of the files instantiated in your application :
      </p>
      <CodeHighlight :code="providerFile" />
      <p>
        The <span class="font-bold">context</span> object collects the various file types in your application
      </p>
    </div>

    <div class="space-y-5">
      <h2>Folder application</h2>
      <p>
        The <code class="active">src/</code> folder is the base folder for your project.
        This is where you will work.
        Please consider this folder as the root of your application.
      </p>
      <p>
        The advantage of considering the <code class="active">src/</code> folder as the base of your application is that you can structure it as you see fit.
        It can be interesting to look at design patterns, here are some of them :
      </p>
      <ul>
        <li>• Monolithic Architecture vs Microservice</li>
        <li>• NodeTSkeleton, a clean architecture</li>
        <li>• Hexagonal Architecture</li>
      </ul>
      <p>
        Please use the <code class="active">factory make:file</code> command to create a file quickly
      </p>
    </div>

    <div class="space-y-5">
      <h3>Import with alias</h3>
      <p>
        The <code class="active">src/</code> folder is the base folder for your project.<br>
        To simplify the import of your files, the alias <code class="active">App/</code> is available.<br>
        This alias refers to the root folder <code class="active">src/</code>.
      </p>
      <CodeHighlight :code="aliasImport" />
    </div>

    <div class="space-y-5">
      <h2>Testing</h2>
      <p>
        It is very important to test your code using unit tests for small features or integration tests for large features.
        his folder allows you to write tests on files named <code class="active">foo.spec.ts</code>.
        The default test framework used in the Discord Factory framework is ava but you can replace it with any other.
      </p>
      <AlertWarn>
        <template v-slot:label>
          Warn
        </template>
        <template v-slot:message>
          Do not neglect unit or integration testing. They are extremely useful in the medium/long term. Indeed, when you develop a new feature, it must not break the existing code, this is called regression.
        </template>
      </AlertWarn>
      <p>
        The strict minimum code is as follows :
      </p>
      <CodeHighlight :code="test" />
      <p>
        Then you can use the followed command to run your tests :
      </p>
      <div class="flex items-center space-x-5">
        <CodeHighlight code="$ npm install" />
        <p class="text-gray-800">or</p>
        <CodeHighlight code="$ yarn install" />
      </div>
    </div>
  </Documentation>
</template>

<script setup lang="ts">
import Documentation from '../../../../components/Documentation.vue'
import CodeHighlight from '../../../../components/CodeHighlight.vue'
import Divider from '../../../../components/Divider.vue'
import LinkExternal from '../../../../components/LinkExternal.vue'
import AlertInfo from '../../../../components/AlertInfo.vue'
import AlertWarn from '../../../../components/AlertWarn.vue'

const structure = `
|- node_modules
|- provider
|- src
|- start
|- test
.env
.eslintignore
.eslintrc
.npmignore
LICENSE
README.md
package.json
tsconfig.json`

const startFolder = `
import 'module-alias/register'
import { Factory } from '@discord-factory/core'

Factory.getInstance().setup()`

const providerFolder = `
import { Context, Provider } from '@discord-factory/core'

export default class AppProvider implements Provider {
  public async boot(): Promise<void> {
    // Your code here
  }

  public async loadFile(context: Context): Promise<void> {
    // Your code here
  }

  public async ready(): Promise<void> {
    // Your code here
  }
}`

const providerFile = `
export default class AppProvider implements Provider {
  public async boot(): Promise<void> {
    // Your code here
  }

  public async loadFile(context: Context): Promise<void> {
    // Create type wrapper
    const fileType = {
      event: () => console.log(\`The event \${(context as EventEntity).event} is loaded.\`),
      command: () => console.log(\`The command \${(context as CommandEntity).label} is loaded.\`),
      middleware: () => console.log(\`The middleware with pattern \${(context as MiddlewareEntity).pattern} is loaded.\`),
      hook: () => console.log(\`The hook is bind in \${(context as HookEntity).hook} event.\`)
    }

    // Call the wrapper
    fileType[file.type]()
  }

  public async ready(): Promise<void> {
    // Your code here
  }
}`

const aliasImport = `
- import Foo from '../../../Foo'
+ import Foo from 'App/Folder/Foo'`

const test = `
import test from 'ava'

test('foo', (t) => {
  t.pass()
})`
</script>
