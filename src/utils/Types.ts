const globalContextType = `
export type Context = HookEntity | EventEntity<k extends keyof ClientEvents> | MiddlewareEntity | CommandEntity | SlashCommandEntity

type File = {
  path: string,
  filename: string,
  extension: string,
  size: number
}
`

export const eventEntity = `
 type EventEntity<K extends keyof ClientEvents> = {
  type: 'event'
  event: K
  file: File
  run (args: any[]): Promise<void>
}
`

export const commandEntity = `
type CommandEntity = {
  type: 'command'
  label: string
  description: string
  tag: string
  alias?: string[]
  usages?: string[]
  roles?: snowflake[]
  permissions?: PermissionResolvable[]
  middlewares?: string[]
  file: File
  run (message: Message, args: string[]): Promise<void>
}
`

export const shashCommandEntity = `
type SlashCommandEntity = {
  type: 'slash-command'
  file: File
  scope: snowflake[]
  roles: snowflake[]
  context: Context
  run (interaction CommandInteraction): Promise<void>
}

type Context = {
  scope: ScopeContext
  roles?: string[]
  options: SlashOption
}

export type SlashOption = {
  name: string
  description: string
  options: ApplicationCommandOption[]
}
`

export const middlewareEntity = `
type MiddlewareEntity = {
  type: 'middleware'
  file: File
  pattern: string
  run (context: MiddlewareContext): Promise<boolean>
}
`

export const hookEntity = `
type HookEntity = {
  type: 'hook'
  file: File
  hook: HookType
  run (context: MiddlewareContext): Promise<boolean>
}

type HookType = 'app:command:preload' | 'app:command:cancelled' | 'app:command:executed' | 'app:message:received'
`