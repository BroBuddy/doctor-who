import Badge from '@/components/Badge'
import type { Stats } from '../types/AdventureType'

type Props = {
    stats: Stats
    skills: string[]
}

function CharacterStats({ stats, skills }: Props) {
    return (
        <div className="flex flex-wrap mb-3">
            {stats && (
                <>
                    <Badge text={`${stats.brains} Brains`} />
                    <Badge text={`${stats.brawn} Brawn`} />
                    <Badge text={`${stats.bravery} Bravery`} />
                </>
            )}

            {skills &&
                skills.map((item: string) => (
                    <Badge key={item} text={item} variant="light" />
                ))}
        </div>
    )
}
export default CharacterStats
