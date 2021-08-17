export type NavbarLink = {
  label: string
  path: string
  local: boolean
}

type CollapseItem = {
  label: string
  description: string
}
export type Collapse = {
  items: CollapseItem[]
}