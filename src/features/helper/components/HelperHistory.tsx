import Card from '@/components/Card'
import { getPrefixByTag } from '@/lib/helper'
import { Link } from 'react-router-dom'

function HelperHistory() {
    const history = JSON.parse(localStorage.getItem('doctor-who-game') || '[]')

    return (
        <Card icon="⏳" headline="History">
            <p>
                <em>
                    "The TARDIS can remember your last 15 destinations, ready to
                    take you back at a moment's notice."
                </em>
            </p>

            {history &&
                history.map(
                    (item: { tag: string; title: string }, index: number) => (
                        <div
                            key={index}
                            className="flex justify-start items-center"
                        >
                            <Link
                                to={`/${getPrefixByTag(item.tag)}/${item.tag}`}
                                className="px-2 pt-1 pb-2 w-4 bg-light-blue rounded mr-1 mb-1 text-center"
                            >
                                <span className="text-sm">{item.tag}</span>
                            </Link>

                            <span className="text-dark-grey text-sm flex-1 px-2">
                                {item.title}
                            </span>
                        </div>
                    )
                )}
        </Card>
    )
}

export default HelperHistory
