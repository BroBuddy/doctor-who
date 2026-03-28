import React from 'react'
import type { CharacterStats } from '../types/Adventure'
import Badge from '@/components/Badge'

type Props = {
    stats: CharacterStats
}

const CharacterAttributes: React.FC<Props> = ({ stats }) => {
    if (!stats) {
        return null
    }

    return (
        <p>
            <Badge icon="🧠" text={`Brains ${stats.brains}`} />{' '}
            <Badge icon="💪" text={`Brawn ${stats.brawn}`} />{' '}
            <Badge icon="🫀" text={`Bravery ${stats.bravery}`} />{' '}
        </p>
    )
}

export default CharacterAttributes
