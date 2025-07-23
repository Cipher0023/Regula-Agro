"use client"
import Link from "next/link"

export interface NavItemInterface {
  url: string,
  label: string
  isActive?: boolean
  color: string
}

export default function NavItem(props: NavItemInterface) {
  return (
    <li
      className={`
        flex h-12 text-base font-bold transition-colors duration-200 border-b-4 pl-4 pr-4 items-center pt-1
        ${props.color}
        ${props.isActive ? '' : 'border-transparent hover:border-current'}
      `}
    >
      <Link href={props.url}>
        {props.label}
      </Link>
    </li>
  )
}
