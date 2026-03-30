import { getAdventureByTag } from '@/features/adventure/services/AdventureService'
import { Link, useParams, useLocation } from 'react-router-dom'
import './Header.scss'

type NavItem = {
    label: string
    path: string
}

const tabs: NavItem[] = [
    { label: 'Adventure', path: '' },
    { label: 'Locations', path: '/locations' },
    { label: 'Plots', path: '/plots' },
    { label: 'Characters', path: '/characters' },
    { label: 'Specials', path: '/specials' },
]

function Header() {
    const { tag } = useParams<{ tag: string }>()
    const location = useLocation()
    const adventure = getAdventureByTag(tag!)

    if (!adventure) return <p>Adventure not found</p>

    return (
        <header className="header mb-4">
            <div className="bg-black p-2">
                <strong className="text-white text-md">
                    {adventure.tag} {adventure.title}
                </strong>
            </div>

            <nav className="bg-purple p-2">
                {tabs.map((item: NavItem) => {
                    const isActive =
                        item.path === ''
                            ? location.pathname === `/adventure/${tag}`
                            : location.pathname.endsWith(item.path)

                    return (
                        <Link
                            key={item.path}
                            to={`/adventure/${tag}${item.path}`}
                            className={`px-2 py-1 ${isActive ? 'text-light-grey' : 'text-white'}`}
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
