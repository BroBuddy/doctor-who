import { Link, useLocation } from 'react-router-dom'

const links = [
    { to: '/', label: 'Game' },
    { to: '/adventures', label: 'Adventures' },
]

const MobileNav = () => {
    const location = useLocation()

    return (
        <nav className="fixed bottom-0 left-0 w-full flex justify-between px-5 py-2 bg-[#7eb87e] border-t-[3px] border-white shadow-md">
            {links.map(({ to, label }) => {
                const isActive = location.pathname === to

                return (
                    <Link
                        key={to}
                        to={to}
                        className={`flex flex-col items-center px-1 py-1 text-sm transition-colors duration-200 ${
                            isActive
                                ? 'text-white font-bold'
                                : 'text-black hover:text-white'
                        }`}
                    >
                        {label}
                    </Link>
                )
            })}
        </nav>
    )
}

export default MobileNav
