import { Link } from 'react-router-dom'
import { getPrefixByTag } from '@/lib/helper'
import Card from '@/components/Card'
import type { BookletItem } from '@/features/booklet/types/BookletType'

type FrequentlyUsedProps = {
    items: BookletItem[]
}

const FrequentlyUsed = ({ items }: FrequentlyUsedProps) => {
    if (!items || items.length === 0) return null

    return (
        <Card icon="⭐" headline="Frequently Used">
            {items.map((item: BookletItem) => (
                <div key={item.tag} className="flex justify-start items-center">
                    <Link
                        to={`/${getPrefixByTag(item.tag)}/${item.tag}`}
                        className="px-2 pt-1 pb-2 w-3 bg-light-blue rounded mr-2 mb-1 text-center"
                    >
                        <span className="text-sm">{item.tag}</span>
                    </Link>
                    <span className="text-sm">{item.title}</span>
                </div>
            ))}
        </Card>
    )
}

export default FrequentlyUsed
