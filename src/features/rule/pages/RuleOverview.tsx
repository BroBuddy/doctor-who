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
            <img
                src="/images/rules.png"
                alt="Rules"
                className="mt-3 w-30 h-14"
            />

            {rules.map((item: Rule) => (
                <div key={item.tag}>
                    <Link to={`/rule/${item.tag}`}>
                        <p>
                            {item.tag}. {item.title}
                        </p>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default RuleOverview
