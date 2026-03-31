import Card from '@/components/Card'
import RuleLink from '@/components/RuleLink'
import { getPrefixByTag } from '@/lib/helper'

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
                            <RuleLink
                                path={getPrefixByTag(item.tag)}
                                tag={item.tag}
                            />

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
