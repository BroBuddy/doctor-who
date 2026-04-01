import { useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Headline } from '@/components/Headline'
import { getTardisByTag } from '../services/TardisService'
import { useHistory } from '@/features/helper/hooks/useHistory'
import Card from '@/components/Card'
import { makeUrlsClickable } from '@/lib/helper'

function TardisDetail() {
    const { tag } = useParams()
    const tardis = useMemo(() => getTardisByTag(String(tag)), [tag])
    const { addToHistory } = useHistory()
    const transformedContent = makeUrlsClickable(tardis.description as string)
    const navigate = useNavigate()

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement
        const tagId = target.dataset.ruleLink
        if (tagId) {
            navigate(`/tardis/${tagId}`)
        }
    }

    useEffect(() => {
        addToHistory(tardis.tag, tardis.title)
    }, [addToHistory, tardis])

    if (!tardis) {
        return null
    }

    return (
        <>
            <Card>
                <Headline>
                    {tardis.tag}. {tardis.title}
                </Headline>

                <div
                    onClick={handleClick}
                    dangerouslySetInnerHTML={{
                        __html: String(transformedContent),
                    }}
                />
            </Card>
        </>
    )
}

export default TardisDetail
