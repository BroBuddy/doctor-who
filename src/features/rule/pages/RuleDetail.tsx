import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Headline } from '@/components/Headline'
import { getRuleByTag } from '../services/RuleService'
import { useHistory } from '@/hooks/useHistory'
import AddFavorite from '@/features/favorite/components/AddFavorite'

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

            <div dangerouslySetInnerHTML={{ __html: rule.description }} />
        </>
    )
}

export default RuleDetail
