import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Headline } from '@/components/Headline'
import { getTardisByTag } from '../services/TardisService'

function TardisDetail() {
    const { tag } = useParams()
    const tardis = useMemo(() => getTardisByTag(String(tag)), [tag])

    if (!tardis) {
        return null
    }

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
