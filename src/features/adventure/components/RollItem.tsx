import Badge from '@/components/Badge'
import React from 'react'

type RollItemProps = {
    roll: string
    name: string
    description?: string
}

const RollItem: React.FC<RollItemProps> = ({ roll, name, description }) => {
    return (
        <>
            <div className="mb-2">
                <Badge text={`🎲 ${roll}`} />
                <Badge text={name} variant="light" />
            </div>
            {description && (
                <>
                    <span>{description}</span>
                </>
            )}
        </>
    )
}

export default RollItem
