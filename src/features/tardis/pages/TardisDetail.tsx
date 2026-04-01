import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Headline } from '@/components/Headline'
import { getTardisByTag } from '../services/TardisService'
import { useHistory } from '@/features/helper/hooks/useHistory'
import Card from '@/components/Card'

function TardisDetail() {
    const { tag } = useParams()
    const tardis = useMemo(() => getTardisByTag(String(tag)), [tag])
    const { addToHistory } = useHistory()

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
                    dangerouslySetInnerHTML={{
                        __html: String(tardis.description),
                    }}
                />
            </Card>
        </>
    )
}

export default TardisDetail
