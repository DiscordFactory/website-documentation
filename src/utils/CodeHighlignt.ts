export const event = `
import { Event, BaseEvent } from '@discord-factory/core'
import { GuildMember } from 'discord.js'

@Event('guildMemberAdd')
export default class FooEvent implements BaseEvent {
  public async run(member: GuildMember): Promise<void> {
    // Your code here
  }
}
`

export const command = `
import { BaseCommand, Command } from '@discord-factory/core'
import { Message } from 'discord.js'

@Command({
  label: 'MyCommand',
  description: 'MyCommand description',
  tag: 'mycommand'
})
export default class FooCommand implements BaseCommand {
  public async run(message: Message, args: string[]): Promise<void> {
    // Your code here
  }
}`

export const slashCommand = `
import { BaseSlashCommand, SlashCommand } from '@discord-factory/core'
import { Message, CommandInteraction } from 'discord.js'

@SlashCommand({
scope: ['guild id'], // or 'GLOBAL'
roles: ['role id'],
  options: {
    name: 'foo',
    description: 'Foo description',
    options: [],
  },
})
export default class FooSlashCommand implements BaseSlashCommand {
  public async run(interaction: CommandInteraction): Promise<void> {
    // Your code here
  }
}`

export const middleware = `
import {
  Middleware,
  BaseMiddleware,
  MiddlewareContext 
} from '@discord-factory/core'

@Middleware({ pattern: '(?<count>\\\\d+)-args')}
export default class FooMiddleware implements BaseMiddleware {
  public async run(context: MiddlewareContext): Promise<void> {
    // Your code here
  }
}
`
