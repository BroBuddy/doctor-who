import { Headline } from '@/components/Headline'
import { getPrefixByTag } from '@/lib/helper'
import { Link } from 'react-router-dom'

function HelperHistory() {
    const history = JSON.parse(localStorage.getItem('doctor-who-game') || '[]')

    return (
        <div>
            <Headline>History</Headline>

            {history && (
                <ul>
                    {history.map(
                        (
                            item: { tag: string; title: string },
                            index: number
                        ) => (
                            <li
                                key={index}
                                className="flex justify-between p-1 items-center"
                            >
                                <Link
                                    to={`/${getPrefixByTag(item.tag)}/${item.tag}`}
                                    className="w-5 text-md"
                                >
                                    {item.tag}
                                </Link>

                                <span className="text-dark-grey flex-1 px-2">
                                    {item.title}
                                </span>

                                <span
                                    className="bg-dark-grey rounded p-1 mr-1"
                                    title="History"
                                >
                                    ⏳
                                </span>
                            </li>
                        )
                    )}
                </ul>
            )}
        </div>
    )
}

export default HelperHistory
