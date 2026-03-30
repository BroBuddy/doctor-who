import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Headline } from '@/components/Headline'
import { getTardisByTag } from '../services/TardisService'
import { useHistory } from '@/features/helper/hooks/useHistory'
import AddFavorite from '@/features/helper/components/AddFavorite'
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
            <Headline>
                <AddFavorite tag={tardis.tag} title={tardis.title} />
                {tardis.tag}. {tardis.title}
            </Headline>

            <Card>
                <div dangerouslySetInnerHTML={{ __html: tardis.description }} />
            </Card>
        </>
    )
}

export default TardisDetail
