import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Headline } from '@/components/Headline'
import { getRuleByTag } from '../services/RuleService'
import { useHistory } from '@/features/helper/hooks/useHistory'
import Card from '@/components/Card'
import { makeUrlsClickable } from '@/lib/helper'

function RuleDetail() {
    const { tag } = useParams()
    const rule = useMemo(() => getRuleByTag(String(tag)), [tag])
    const transformedContent = makeUrlsClickable(rule.description as string)
    const { addToHistory } = useHistory()

    useEffect(() => {
        addToHistory(rule.tag, rule.title)
    }, [addToHistory, rule])

    if (!rule) {
        return null
    }

    return (
        <>
            <Headline>
                {rule.tag}. {rule.title}
            </Headline>

            <Card>
                <div
                    dangerouslySetInnerHTML={{
                        __html: String(transformedContent),
                    }}
                />
            </Card>
        </>
    )
}

export default RuleDetail
