import React from 'react'

type BadgeProps = {
    text: string
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
    return (
        <span className="rounded text-sm text-bold bg-light-grey py-1 px-2 mr-1">
            {text}
        </span>
    )
}

export default Badge
