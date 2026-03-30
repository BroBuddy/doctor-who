import { Link } from 'react-router-dom'
import { getRuleData } from '../services/RuleService'
import type { Rule } from '../types/RuleType'

function RuleOverview() {
    const rules = getRuleData() as Rule[]

    if (!rules || rules.length === 0) {
        return <p>No rule data available.</p>
    }

    return (
        <>
            <div className="flex flex-wrap">
                {rules.map((item: Rule) => (
                    <Link
                        key={item.tag}
                        to={`/rule/${item.tag}`}
                        title={item.title}
                        className="pl-1 pr-2 py-1 w-4"
                    >
                        <span className="text-md">{item.tag}</span>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default RuleOverview
