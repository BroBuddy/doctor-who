import React from 'react'

type RollItemProps = {
    roll: string
    name: string
    description?: string
}

const RollItem: React.FC<RollItemProps> = ({ roll, name, description }) => {
    return (
        <>
            <strong>
                {roll} | {name}
            </strong>
            {description && (
                <>
                    <strong className="mr-1">:</strong>
                    <span>{description}</span>
                </>
            )}
        </>
    )
}

export default RollItem
