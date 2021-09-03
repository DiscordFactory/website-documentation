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

    <div class="space-y-5">
      <h2>Deploy with Docker</h2>
      <p>Docker is free software for launching applications in isolated containers.</p>
      <div>
        <p class="mr-2">Learn more: </p>
        <LinkExternal url="https://www.docker.com">
          Docker Documentation
        </LinkExternal>
      </div>
      <AlertWarn>
        <template v-slot:label>
          Warn
        </template>
        <template v-slot:message>
          In the docker section, replace <br />
            - <span class="font-bold">[name]</span> with the name of your bot, <br />
            - <span class="font-bold">[version]</span> with the version of your bot. (You can use `latest`, `dev`... with docker) <br />
            - <span class="font-bold">[env]</span> with your env file (`environment.json` or `environment.yml`)
        </template>
      </AlertWarn>
      <p>Create a root file named <code class="active">Dockerfile</code>.</p>
      <CodeHighlight :code="Dockerfile" />
      <p>Then open a terminal in the root folder of your application and run the following command :</p>
      <CodeHighlight :code="buildImage" />
      <p>Use docker-compose to automate the start command of your bot with the following content :</p>
      <CodeHighlight :code="dockerCompose" />
      <p>Finally, you can run your image inside a container with the following command :</p>
      <CodeHighlight :code="startContainer" />
      <AlertInfo>
        <template v-slot:label>
          Info
        </template>
        <template v-slot:message>
          The option <span class="font-bold">-d</span> allows to launch the container in the background.
        </template>
      </AlertInfo>
      <p>To stop the container, run the following command :</p>
      <CodeHighlight :code="stopContainer" />
      <p>To stop see the log of your discord bot, run the following command :</p>
      <CodeHighlight :code="seeLogs" />
    </div>
  </Documentation>
</template>

<script setup lang="ts">
import Documentation from '../../../../components/Documentation.vue'
import CodeHighlight from '../../../../components/CodeHighlight.vue'
import LinkExternal from '../../../../components/LinkExternal.vue'
import AlertInfo from '../../../../components/AlertInfo.vue'
import AlertWarn from "../../../../components/AlertWarn.vue";

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

const Dockerfile = `
FROM node:16-alpine3.11

RUN mkdir -p /usr/src/[name]

WORKDIR /usr/src/[name]

COPY . /usr/src/[name]

RUN yarn build

CMD ["yarn", "start"]
`

const buildImage = `
$ cd /path/to/project/folder/root
$ docker build -t [name]:[version] .
`

const startContainer = `
$ docker-compose up -d
`

const stopContainer = `
$ docker-compose down
`

const seeLogs = `
$ docker logs [name]
`

const dockerCompose = `
version: "3"

services:
  [name]:
    image: [name]:[version]
    container_name: [name]
    volumes:
      - "/path/to/project/folder/root/[env]:/usr/src/[name]/[env]:ro"
`
</script>
