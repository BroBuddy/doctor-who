import { Headline } from '@/components/Headline'
import { getPrefixByTag } from '@/lib/helper'
import { Link } from 'react-router-dom'

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
                                    to={`/${getPrefixByTag(item.tag)}/${item.tag}`}
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
