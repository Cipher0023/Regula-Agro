"use client"
import Link from "next/link"

export interface NavItemInterface {
  url: string,
  label: string
  isActive?: boolean
}

export default function NavItem(props: NavItemInterface) {
  return (
    <li
      className={`
        m-5 text-base font-normal transition-colors duration-200
        border-b-2 hover:text-blue-500
        ${props.isActive ? 'text-white border-blue-500' : 'text-black border-transparent'}
      `}
    >
      <Link href={props.url}>
        {props.label}
      </Link>
    </li>
  )
}
