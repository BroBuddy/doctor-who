import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Headline } from '@/components/Headline'
import { getTardisByTag } from '../services/TardisService'
import { useHistory } from '@/hooks/useHistory'

function TardisDetail() {
    const { tag } = useParams()
    const tardis = useMemo(() => getTardisByTag(String(tag)), [tag])

    if (!tardis) {
        return null
    }

    const { addToHistory } = useHistory()

    useEffect(() => {
        addToHistory(tardis.tag, tardis.title)
    }, [tag])

    return (
        <>
            <Headline>
                {tardis.tag}. {tardis.title}
            </Headline>

            <div dangerouslySetInnerHTML={{ __html: tardis.description }} />
        </>
    )
}

export default TardisDetail
