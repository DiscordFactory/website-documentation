import { NavbarLink } from '../types'
import { github, twitter } from './Icons'
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/vue/outline'

export const links: NavbarLink[] = [
  { label: 'Home', path: '/', local: true },
  { label: 'Documentation', path: '/documentation/getting-started', local: true },
  { label: 'Discussion', path: '/https://github.com/DiscordFactory/Core/discussions', local: false }
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
      { label: 'Partial Hoohs', href: '/documentation/partial-hooks', isMenu: false },
      { label: 'Commands', href: '/documentation/commands', isMenu: false },
      { label: 'Slash Commands', href: '/documentation/slash-commands', isMenu: false },
      { label: 'Events', href: '/documentation/events', isMenu: false },
      { label: 'Middlewares', href: '/documentation/middlewares', isMenu: false },
      { label: 'Hooks', href: '/documentation/hooks', isMenu: false },
    ]
  },
  {
    label: 'Advanced',
    isMenu: true,
    child: [
      { label: 'Deployment', href: '/documentation/deployment', isMenu: false },
    ]
  },
  {
    label: 'Modules',
    isMenu: true,
    child: [
      { label: 'Colorize', href: '/documentation/modules/colorize', isMenu: false },
      { label: 'Database storage', href: '/documentation/modules/database-storage', isMenu: false },
    ]
  },
  {
    label: 'Example',
    isMenu: true,
    child: [
      { label: 'Ping pong', href: '/documentation/examples/ping-pong', isMenu: false },
      { label: 'Buttons', href: '/documentation/examples/buttons', isMenu: false },
    ]
  },
]
