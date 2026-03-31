import Badge from '@/components/Badge'

type AdventureStatsProps = {
    stats?: {
        danger: number
        knowledge: number
        vp: number
    }
}

function AdventureStats({ stats }: AdventureStatsProps) {
    if (!stats) return null

    const { danger, knowledge, vp } = stats

    return (
        <p className="mb-1">
            <Badge icon="⚠️" text={`Danger ${danger}`} variant="light" />
            <Badge icon="📚" text={`Knowledge ${knowledge}`} variant="light" />
            <Badge icon="⭐" text={`VP ${vp}`} variant="light" />
        </p>
    )
}

export default AdventureStats
