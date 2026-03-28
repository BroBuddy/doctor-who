import { Link, useLocation } from 'react-router-dom'
import './MobileNav.scss'

const links = [
    { to: '/', label: 'Game' },
    { to: '/adventure', label: 'Adventures' },
]

const MobileNav = () => {
    const location = useLocation()

    return (
        <nav className="mobile-nav">
            {links.map(({ to, label }) => {
                const isActive = location.pathname === to
                return (
                    <Link key={to} to={to} className={isActive ? 'active' : ''}>
                        {label}
                    </Link>
                )
            })}
        </nav>
    )
}

export default MobileNav
