import { NavbarLink } from '../types'
import { github, twitter } from './Icons'

export const links: NavbarLink[] = [
  { label: 'Home', path: '/', local: true },
  { label: 'Documentation', path: '/documentation', local: true },
  { label: 'Discussion', path: '/https://github.com/DiscordFactory/Core/discussions', local: false }
]

export const socials = [
  twitter,
  github,
]