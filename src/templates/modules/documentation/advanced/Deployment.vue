<template>
  <Documentation title="Deployment">
    <p>
      Deployment is the logical phase after developing an application. This section will deal with the production deployment of the application.
      In the first time, you should to install all dependencies.
    </p>

    <h2>Starting your project</h2>
    <p>All you have to do is install the dependencies with the following commands</p>
    <div class="flex items-center space-x-5">
      <CodeHighlight code="$ npm install" />
      <p class="text-gray-800">or</p>
      <CodeHighlight code="$ yarn install" />
    </div>

    <p>In the second time, you should to build your application because the production mode cannot read and execute the typescript natively.</p>
    <div class="flex items-center space-x-5">
      <CodeHighlight code="$ npm run build" />
      <p class="text-gray-800">or</p>
      <CodeHighlight code="$ yarn build" />
    </div>

    <div class="space-y-5">
      <h2>Deploy with PM2</h2>
      <p>PM2 is a daemon process manager that will help you manage and keep your application online 24/7. Install PM2 :</p>
      <div class="flex items-center space-x-5">
        <CodeHighlight code="$ npm install -g pm2" />
        <p class="text-gray-800">or</p>
        <CodeHighlight code="$ yarn global add pm2" />
      </div>
      <p>Create a root file named <code class="active">ecosystem.config.js</code>.</p>
      <CodeHighlight :code="ecosystem" />
      <AlertInfo>
        <template v-slot:label>
          Info
        </template>
        <template v-slot:message>
          The <span class="font-bold">index.ts</span> file in the <span class="font-bold">start folder</span> is the entry point for your application.
        </template>
      </AlertInfo>
      <p>Then open a terminal in the root folder of your application and run the following command :</p>
      <CodeHighlight :code="startPm2" />
    </div>
  </Documentation>
</template>

<script setup lang="ts">
import Documentation from '../../../../components/Documentation.vue'
import CodeHighlight from '../../../../components/CodeHighlight.vue'
import Divider from '../../../../components/Divider.vue'
import LinkExternal from '../../../../components/LinkExternal.vue'
import AlertWarn from '../../../../components/AlertWarn.vue'
const ecosystem = `
module.exports = {
  apps : [{
    name : 'Discord Factory application',
    instances : 'max',
    script : 'npm',
    args : 'start'
  }]
}`

const startPm2 = `
$ cd /path/to/project/folder/root
$ pm2 start`
</script>
