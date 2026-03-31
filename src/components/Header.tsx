import { Link, useLocation } from 'react-router-dom'
import './Header.scss'

export type NavItem = {
    label: string
    path: string
}

export type HeaderProps = {
    basePath: string
    tabs: NavItem[]
    data: { tag: string; title: string } | null
}

function Header({ basePath, tabs, data }: HeaderProps) {
    const location = useLocation()

    if (!data) return <p>Data not found.</p>

    return (
        <header className="header slide-down mb-4">
            <div className="bg-black p-2">
                <strong className="text-white text-md">{data.title}</strong>
            </div>

            <nav className="bg-blue p-2">
                {tabs.map((item: NavItem) => {
                    const isActive =
                        item.path === ''
                            ? location.pathname === `${basePath}/${data.tag}`
                            : location.pathname.endsWith(item.path)

                    return (
                        <Link
                            key={item.path}
                            to={`${basePath}/${data.tag}${item.path}`}
                            className={`px-2 py-1 ${
                                isActive ? 'text-light-blue' : 'text-white'
                            }`}
                        >
                            <span className="text-sm">{item.label}</span>
                        </Link>
                    )
                })}
            </nav>
        </header>
    )
}

export default Header
