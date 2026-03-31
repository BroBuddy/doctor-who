import Badge from '@/components/Badge'
import { formatYear } from '@/lib/helper'
import type { AdventureEra } from '../types/AdventureType'

type Props = {
    year: number | null
    tardis: number | null
    era: AdventureEra | null
}

type BadgeItem = {
    icon: string
    text: string
}

function isBadgeItem(item: unknown): item is BadgeItem {
    return Boolean(item)
}

function YearEraTardis({ year, era, tardis }: Props) {
    const badges: BadgeItem[] = [
        year && {
            icon: '🕒',
            text: formatYear(year),
        },
        era && {
            icon: '🌍',
            text: era,
        },
        tardis && {
            icon: '🌀',
            text: `Tardis ${tardis}`,
        },
    ].filter(isBadgeItem)

    if (badges.length === 0) return null

    return (
        <p className="mb-1">
            {badges.map((badge, index) => (
                <Badge key={index} {...badge} />
            ))}
        </p>
    )
}

export default YearEraTardis
