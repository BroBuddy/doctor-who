import Card from '@/components/Card'
import type { BookletItem } from '@/features/booklet/types/BookletType'
import RuleLink from '@/components/RuleLink'
import { getPrefixByTag } from '@/lib/helper'

type FrequentlyUsedProps = {
    items: BookletItem[]
}

const FrequentlyUsed = ({ items }: FrequentlyUsedProps) => {
    if (!items || items.length === 0) return null

    return (
        <Card icon="⭐" headline="Frequently Used">
            {items.map((item: BookletItem) => (
                <div key={item.tag} className="flex justify-start items-center">
                    <RuleLink path={getPrefixByTag(item.tag)} tag={item.tag} />

                    <span className="text-sm ml-1">{item.title}</span>
                </div>
            ))}
        </Card>
    )
}

export default FrequentlyUsed
