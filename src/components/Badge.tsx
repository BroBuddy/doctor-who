import React from 'react'

type BadgeProps = {
    text: string
    icon?: string
    variant?: 'default' | 'light'
}

const Badge: React.FC<BadgeProps> = ({ text, icon, variant = 'default' }) => {
    const variantStyles = variant === 'default' ? 'bg-purple' : 'bg-grey'

    return (
        <span
            className={`badge rounded text-sm text-bold text-white py-1 px-2 mb-1 mr-1 ${variantStyles}`}
        >
            {icon && <span className="mr-1">{icon}</span>}
            {text}
        </span>
    )
}

export default Badge
