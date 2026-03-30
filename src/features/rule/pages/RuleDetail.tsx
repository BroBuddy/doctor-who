import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Headline } from '@/components/Headline'
import { getRuleByTag } from '../services/RuleService'
import { useHistory } from '@/features/helper/hooks/useHistory'
import AddFavorite from '@/features/helper/components/AddFavorite'
import Card from '@/components/Card'

function RuleDetail() {
    const { tag } = useParams()
    const rule = useMemo(() => getRuleByTag(String(tag)), [tag])
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
                <AddFavorite tag={rule.tag} title={rule.title} />
                {rule.tag}. {rule.title}
            </Headline>

            <Card>
                <div dangerouslySetInnerHTML={{ __html: rule.description }} />
            </Card>
        </>
    )
}

export default RuleDetail
