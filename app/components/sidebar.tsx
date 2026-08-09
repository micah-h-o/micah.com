'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const pages = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Writing",
        href: "/writing",
    },
    {
        title: "Projects",
        href: "/projects",
    },
]

export function Sidebar() {
    const pathname = usePathname()
    return (
        <aside className='flex flex-col w-[192px] font-sans bg-surface-subtle pt-36 md:pt-16 px-8 gap-3'>
            {pages.map((page) => {
                return (
                    <Link key={page.title} href={page.href} className={pathname === page.href ? '' : ''}>{page.title}</Link>
                )
            })}
        </aside>
    )
}