import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Headline } from '@/components/Headline'
import { getRuleByTag } from '../services/RuleService'
import { useHistory } from '@/hooks/useHistory'

function RuleDetail() {
    const { tag } = useParams()
    const rule = useMemo(() => getRuleByTag(String(tag)), [tag])

    if (!rule) {
        return null
    }

    const { addToHistory } = useHistory()

    useEffect(() => {
        addToHistory(rule.tag, rule.title)
    }, [tag])

    return (
        <>
            <Headline>
                {rule.tag}. {rule.title}
            </Headline>

            <div dangerouslySetInnerHTML={{ __html: rule.description }} />
        </>
    )
}

export default RuleDetail
