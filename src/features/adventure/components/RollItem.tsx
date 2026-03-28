import Badge from '@/components/Badge'
import React, { type ReactNode } from 'react'

type RollItemProps = {
    roll: string
    name: string
    children?: ReactNode
}

const RollItem: React.FC<RollItemProps> = ({ roll, name, children }) => {
    return (
        <div className="mb-4">
            <div className="mb-2 flex gap-2">
                <Badge text={`🎲 ${roll}`} />
                <Badge text={name} variant="light" />
            </div>
            {children && <>{children}</>}
        </div>
    )
}

export default RollItem
