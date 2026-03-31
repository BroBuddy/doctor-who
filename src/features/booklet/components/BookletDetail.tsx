import type { BookletItem } from '../types/BookletType'
import RuleLink from '@/components/RuleLink'

type BookletDetailProps = {
    type: 'rule' | 'adventure' | 'enemy' | 'tardis'
    getData: () => BookletItem[]
    className?: string
}

const BookletDetail = ({ type, getData, className }: BookletDetailProps) => {
    const items = getData()

    if (!items || items.length === 0) {
        return <p>No {type} data available.</p>
    }

    return (
        <div className={className}>
            <div className="flex flex-wrap">
                {items.map((item) => (
                    <RuleLink key={item.tag} path={type} tag={item.tag} />
                ))}
            </div>
        </div>
    )
}

export default BookletDetail
