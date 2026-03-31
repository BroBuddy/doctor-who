import { Link } from 'react-router-dom'
import type { BookletItem } from '../types/BookletType'

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
                    <Link
                        key={item.tag}
                        to={`/${type}/${item.tag}`}
                        title={item.title}
                        className="p-2 w-4 bg-light-blue rounded mr-1 mb-1 text-center"
                    >
                        <span className="text-sm">{item.tag}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default BookletDetail
