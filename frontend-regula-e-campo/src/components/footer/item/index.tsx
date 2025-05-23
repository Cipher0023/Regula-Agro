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
        m-3 text-base font-bold transition-colors duration-200 border-b-2
        ${props.color}
        ${props.isActive ? `border-green-600 ${props.color}` : `text-black border-transparent hover:${props.color}`}
      `}
    >
      <Link href={props.url}>
        {props.label}
      </Link>
    </li>
  )
}
