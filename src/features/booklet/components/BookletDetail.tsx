import { Link } from 'react-router-dom'

type BookletItem = {
    tag: string
    title: string
}

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
                        className="pl-1 pr-1 py-1 w-4"
                    >
                        <span className="text-md">{item.tag}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default BookletDetail
