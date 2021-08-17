import { NavbarLink } from '../types'
import { github, twitter } from './Icons'
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/vue/outline'

export const links: NavbarLink[] = [
  { label: 'Home', path: '/', local: true },
  { label: 'Documentation', path: '/documentation', local: true },
  { label: 'Discussion', path: '/https://github.com/DiscordFactory/Core/discussions', local: false }
]

export const socials = [
  twitter,
  github,
]

export const documentation = [
  {
    label: 'Basic',
    isMenu: true,
    child: [
      { label: 'Getting starting', href: '/documentation/getting-starting', isMenu: true },
    ]
  },
]
