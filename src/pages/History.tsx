import { Headline } from '@/components/Headline'
import { Link } from 'react-router-dom'

const getPrefix = (tag: string) => {
    const first = tag.charAt(0)

    switch (first) {
        case 'A':
            return 'adventure'
        case 'E':
            return 'enemy'
        case 'R':
            return 'rule'
        default:
            return 'tardis'
    }
}

function History() {
    const history = JSON.parse(localStorage.getItem('doctor-who-game') || '[]')

    return (
        <>
            <Headline>History</Headline>

            <>
                {history.length === 0 && <p>No history yet.</p>}

                <ul>
                    {history.map(
                        (
                            item: { tag: string; title: string },
                            index: number
                        ) => (
                            <li key={index}>
                                <Link
                                    to={`/${getPrefix(item.tag)}/${item.tag}`}
                                >
                                    <strong className="mr-1">
                                        {item.tag}:
                                    </strong>
                                    <span className="text-dark-grey">
                                        {item.title}
                                    </span>
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </>
        </>
    )
}

export default History
