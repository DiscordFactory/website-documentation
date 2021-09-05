<template>
  <Documentation title="Database storage">
    <p>
      The <b>@discord-factory/storage</b> module allows you to use a MySQL, PostgreSQL or SQLite database without using an API to make some data persistent.
    </p>
    <p>
      When you develop an application with a discord bot, you will need to regularly store values in order to share them globally with the application.
    </p>
    <p>
      To solve this problem, we have designed a module that simplifies the use of databases such as <b>MySQL</b>, <b>PostgreSQL</b> or <b>SQLite</b>. This module is based on TypeORM.
      No more endless lines of code and welcome to modernity, thanks to the <b>storage</b> module you will be able to simplify your life in the creation of a database relationship.
    </p>

    <div class="space-y-5">
      <h2>Installation</h2>
      <p>
        To be able to use the module, you must have installed it beforehand by following the explanations below :
      </p>
      <div class="flex items-center space-x-5">
        <CodeHighlight code="npm install @discord-factory/storage" />
        <p class="text-gray-800">or</p>
        <CodeHighlight code="yarn add @discord-factory/storage" />
      </div>
      <p>
        In order to use the module, you will need to start it at the same time as your application through the providers.
      </p>
      <CodeHighlight :code="providerInit" />
      <AlertSuccess>
        <template v-slot:label>Success</template>
        <template v-slot:message>
          Congratulations you just installed the <b>storage</b> module 🎉
        </template>
      </AlertSuccess>
      <p>
        Now that the installation is done, we will have to configure the appropriate driver for your use :
      </p>
      <div>
        <h6>SQLite</h6>
        <div class="flex items-center space-x-5">
          <CodeHighlight code="npm install sqlite3" />
          <p class="text-gray-800">or</p>
          <CodeHighlight code="yarn add sqlite3" />
        </div>
      </div>
      <div>
        <h6>MySQL</h6>
        <div class="flex items-center space-x-5">
          <CodeHighlight code="npm install mysql" />
          <p class="text-gray-800">or</p>
          <CodeHighlight code="yarn add mysql" />
        </div>
      </div>

      <div>
        <h6>PostgreSQL</h6>
        <div class="flex items-center space-x-5">
          <CodeHighlight code="npm install pg" />
          <p class="text-gray-800">or</p>
          <CodeHighlight code="yarn add pg" />
        </div>
      </div>

      <p>
        Once the driver is configured, we will detail the functionality of the <b>module</b>, inspired by the <LinkExternal url="https://adonisjs.com/">Adonis</LinkExternal> framework.
        It takes its basics in designing a model and a migration.
      </p>
      <p>
        You will say to me that a model or a migration?
      </p>
    </div>
    <div class="space-y-5">
      <h2>Model</h2>
      <p>
        A model is a representation of your table that you can call via its object on your code to use <b>CRUD</b> (Create, Read, Update or Delete).
      </p>
      <CodeHighlight :code="model" />
      <AlertInfo>
        <template v-slot:label>Info</template>
        <template v-slot:message>
          The <b>@PrimaryColumn()</b> represents the primary key of the model (tables) where we will add as data a UUID via a <b>decorator</b> so the <b>BeforeInsert()</b> is a Hook.
        </template>
      </AlertInfo>
      <AlertInfo>
        <template v-slot:label>Info</template>
        <template v-slot:message>
          The <b>@Column()</b> represents a column of the model which will take a <b>property</b> with a primitive typescript type.
        </template>
      </AlertInfo>
      <p>
        To create a model, simply run the <b>factory make:file</b> command and select `model`
      </p>
    </div>

    <div class="space-y-5">
      <h2>Migration</h2>
      <p>
        Now that the model representing your table is created, we need to create the corresponding migration to create the table and its columns in your database.
      </p>
      <CodeHighlight :code="migration" />
      <p>
        Identique aux migrations de <b>AdonisJS</b> il est assez facile de comprendre son fonctionnement :
      </p>
      <ul>
        <li class="list-disc ml-5"><b>Foo_1624901710168</b> represents the table name and creation timestamp</li>
        <li class="list-disc ml-5"><b>name: 'user'</b> represents the name of the table on the database</li>
        <li class="list-disc ml-5"><b>columns</b> is an array of JSON information (name, type, options)</li>
      </ul>
      <p>
        Once this is understood, it is fairly easy to create a migration using the framework.
      </p>
      <p>
        To create a migration, simply run the <b>factory make:file</b> command and select <b>migration</b>.
        Next, choose the type of file migration and answer the question and answer set that is presented to you. One of the questions will ask you to create or modify a table, if your table has not yet been created, please select Create Table.
      </p>
      <AlertInfo>
        <template v-slot:label>Info</template>
        <template v-slot:message>
          You can also edit a database if you want to add columns or change existing ones.
          When asked to choose the type of migration you want, select <b>Update Table</b> and a file like the one below will be generated.
        </template>
      </AlertInfo>
      <CodeHighlight :code="migrationUpgrade" />
    </div>

    <div class="space-y-5">
      <h2>Migrate to your database</h2>
      <p>
        Transfer your migrations to the database.
      </p>
      <CodeHighlight :code="migrateUp" />
    </div>

    <div class="space-y-5">
      <h2>Resetting your database</h2>
      <p>
        Remove the migrations from the database.
      </p>
      <CodeHighlight :code="migrateDown" />
    </div>

    <div class="space-y-5">
      <h2>Use the CRUD</h2>
      <p>
        The computer acronym CRUD designates the four basic operations for data persistence, in particular the storage of information in a database.
        These are : <b>Create</b>, <b>Read</b>, <b>Update</b>, <b>Delete</b>.
      </p>
      <div class="space-y-5">
        <div>
          <h6>Get all resources</h6>
          <CodeHighlight :code="getAll" />
        </div>
        <div>
          <h6>Get one resource</h6>
          <CodeHighlight :code="getOne" />
        </div>
        <div>
          <h6>Create resource</h6>
          <CodeHighlight :code="post" />
        </div>
        <div>
          <h6>Update resource</h6>
          <CodeHighlight :code="put" />
        </div>
        <div>
          <h6>Destroy resource</h6>
          <CodeHighlight :code="destroy" />
        </div>
      </div>
    </div>
  </Documentation>
</template>

<script setup lang="ts">
import Documentation from '../../../../components/Documentation.vue'
import CodeHighlight from '../../../../components/CodeHighlight.vue'
import ColorContainer from '../../../../components/ColorContainer.vue'
import AlertSuccess from '../../../../components/AlertSuccess.vue'
import LinkExternal from '../../../../components/LinkExternal.vue'
import AlertInfo from '../../../../components/AlertInfo.vue'

const providerInit = `
import { Provider } from '@discord-factory/core'
import { useDatabase } from '@discord-factory/storage'

export default class AppProvider implements Provider {
  public async boot(): Promise<void> {
    /**
     * The useDatabase() hook allows you to access
     * the initialization of the module in order to operate it.
     */
    const { initialize } = useDatabase()

    /**
     * You will then have to execute the function.
     */
    await initialize()
  }
}`

const model = `
import { BaseModel, Entity, Column, PrimaryColumn, BeforeInsert, Generate } from '@discord-factory/storage'

@Entity()
export default class User extends BaseModel {
  @PrimaryColumn()
  public id!: string

  @BeforeInsert()
  private generateUUID () {
    this.id = Generate.generateUUID()
  }

  @Column()
  public username!: string
}`

const migration = `
import { BaseSchema, QueryRunner, Migration, Table } from '@discord-factory/storage'

@Migration()
export default class Foo_1624901710168 extends BaseSchema {
  async up(query: QueryRunner): Promise<void> {
    await query.createTable(new Table({
      name: 'foo',
      columns: [
        { name: 'id', type: 'uuid', isPrimary: true },
        { name: 'bar', type: 'varchar'},
      ],
    }), true)
  }

  async down(query: QueryRunner): Promise<void> {
    await query.dropTable('user')
  }
}`

const migrationUpgrade = `
import { BaseSchema, QueryRunner, Migration, TableColumn } from '@discord-factory/storage'

@Migration()
export default class User_1624901710168 extends BaseSchema {
  async up(query: QueryRunner): Promise<void> {
    await query.addColumns('user', [
      new TableColumn({ name: 'foo', type: 'string' }),
    ])
  }

  async down(query: QueryRunner): Promise<void> {
    await query.dropColumns('user', ['foo'])
  }
}`

const migrateUp = `
import { useMigrations } from "@discord-factory/storage";

const { migrate } = useMigrations()
await migrate()
`

const migrateDown = `
import { useMigrations } from "@discord-factory/storage";

const { rollback } = useMigrations()
await rollback()
`

const getAll = `
const foo = Foo.find()
console.log(foo)
`

const getOne = `
const foo = Foo.findOne({ where: { id: 1 } })
console.log(foo)
`

const post = `
const foo = Foo.create({
  firstname: 'John',
  lastname: 'Doe'
})

await foo.save()
`

const put = `
const foo = Foo.findOne({ where: { id: 1 } })

if (foo) {
  await Foo.update(foo, {
    firstname: 'John',
    lastname: 'Doe'
  })
}
`

const destroy = `
const foo = Foo.findOne({ where: { id: 1 } })
await foo?.remove()
`
</script>