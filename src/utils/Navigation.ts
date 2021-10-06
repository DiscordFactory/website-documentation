import { NavbarLink } from '../types'
import { github, twitter } from './Icons'

export const links: NavbarLink[] = [
  { label: 'Home', path: '/', local: true },
  { label: 'Documentation', path: '/documentation/getting-started', local: true },
  { label: 'Discussion', path: 'https://github.com/DiscordFactory/Core/discussions', local: false }
]

export const socials = [
  twitter,
  github,
]

export const documentation = [
  { label: 'Getting starting', href: '/documentation/getting-started', isMenu: false },
  {
    label: 'Basic',
    isMenu: true,
    child: [
      { label: 'Starting', href: '/documentation/starting', isMenu: false },
      { label: 'Environment', href: '/documentation/environment', isMenu: false },
      { label: 'Structure', href: '/documentation/structure', isMenu: false },
      { label: 'Partial Hooks', href: '/documentation/partial-hooks', isMenu: false },
      { label: 'Commands', href: '/documentation/commands', isMenu: false },
      { label: 'Context Menu', href: '/documentation/context-menu', isMenu: false },
      { label: 'Events', href: '/documentation/events', isMenu: false },
      { label: 'Hooks', href: '/documentation/hooks', isMenu: false },
    ]
  },
  {
    label: 'Advanced',
    isMenu: true,
    child: [
      { label: 'Deployment', href: '/documentation/deployment', isMenu: false },
      { label: 'Addon', href: '/documentation/create-your-addon', isMenu: false },
    ]
  },
  {
    label: 'Modules',
    isMenu: true,
    child: [
      { label: 'Message command', href: '/documentation/modules/message-command', isMenu: false },
      { label: 'Colorize', href: '/documentation/modules/colorize', isMenu: false },
      { label: 'Storage next', href: '/documentation/modules/database-storage', isMenu: false },
    ]
  },
  {
    label: 'Example',
    isMenu: true,
    child: [
      { label: 'Presence with provider', href: '/documentation/examples/presence-with-provider', isMenu: false },
      { label: 'Ping pong', href: '/documentation/examples/ping-pong', isMenu: false },
      { label: 'Buttons', href: '/documentation/examples/buttons', isMenu: false },
    ]
  },
]

export enum markdownEndpoint {
  GETTING_STARTED = 'https://raw.githubusercontent.com/DiscordFactory/.github/main/profile/README.md',
  STARTING = 'https://raw.githubusercontent.com/DiscordFactory/core/master/doc/Starting.md',
  COMMAND = 'https://raw.githubusercontent.com/DiscordFactory/core/master/doc/Command.md',
  CONTEXT_MENU = 'https://raw.githubusercontent.com/DiscordFactory/core/master/doc/ContextMenu.md',
  APPLICATION_HOOK = 'https://raw.githubusercontent.com/DiscordFactory/core/master/doc/Application.md',
  EVENT = 'https://raw.githubusercontent.com/DiscordFactory/core/master/doc/Event.md',
  STRUCTURE = 'https://raw.githubusercontent.com/DiscordFactory/core/master/doc/Structure.md',
  ENVIRONMENT = 'https://raw.githubusercontent.com/DiscordFactory/core/master/doc/Environment.md',
  HOOK = 'https://raw.githubusercontent.com/DiscordFactory/core/master/doc/Hook.md',

  PRESENCE_PROVIDER = 'https://raw.githubusercontent.com/DiscordFactory/core/master/doc/exemples/PresenceProvider.md',
  PING_PONG = 'https://raw.githubusercontent.com/DiscordFactory/core/master/doc/exemples/PingPong.md',
  BUTTONS = 'https://raw.githubusercontent.com/DiscordFactory/core/master/doc/exemples/Buttons.md',

  MESSAGE_COMMAND = 'https://raw.githubusercontent.com/DiscordFactory/message-commands/master/README.md',
  STORAGE = 'https://raw.githubusercontent.com/DiscordFactory/storage-next/master/README.md',
  COLORIZE = 'https://raw.githubusercontent.com/DiscordFactory/colorize/master/README.md',

  DEPLOYMENT = 'https://raw.githubusercontent.com/DiscordFactory/core/master/doc/Deployment.md',
  ADDON = 'https://raw.githubusercontent.com/DiscordFactory/core/master/doc/advanced/CreateAddon.md',

  PARTIAL_COMMAND = 'https://raw.githubusercontent.com/DiscordFactory/core/master/doc/partials/Command.md',
  PARTIAL_EVENT = 'https://raw.githubusercontent.com/DiscordFactory/core/master/doc/partials/Event.md',
  PARTIAL_CONTEXT_MENU = 'https://raw.githubusercontent.com/DiscordFactory/core/master/doc/partials/ContextMenu.md',
  PARTIAL_MODEL = 'https://raw.githubusercontent.com/DiscordFactory/storage-next/master/doc/partials/Model.md',

  test = 'https://raw.githubusercontent.com/DiscordFactory/.github/main/README.md',
}