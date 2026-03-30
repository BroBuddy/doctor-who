import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Headline } from '@/components/Headline'
import type { TabItem } from '@/components/Tabs'
import Tabs from '@/components/Tabs'
import { getEnemyByTag } from '../services/EnemyService'
import EnemyView from '../components/EnemyView'
import EnemyTables from '../components/EnemyTables'
import { useHistory } from '@/hooks/useHistory'
import AddFavorite from '@/features/favorite/components/AddFavorite'
import EnemyLairView from '../components/EnemyLairView'

function EnemyDetail() {
    const { tag } = useParams()
    const enemy = useMemo(() => getEnemyByTag(String(tag)), [tag])
    const { addToHistory } = useHistory()

    useEffect(() => {
        addToHistory(enemy.tag, enemy.title)
    }, [addToHistory, enemy])

    if (!enemy) {
        return null
    }

    const tabItems: TabItem[] = [
        {
            label: 'Enemy',
            content: <EnemyView enemy={enemy} />,
        },
        {
            label: 'Goals & Events',
            content: <EnemyTables enemy={enemy} />,
        },
        {
            label: 'Lair',
            content: <EnemyLairView lair={enemy.lair} />,
        },
    ]

    return (
        <>
            <Headline>
                <AddFavorite tag={enemy.tag} title={enemy.title} />
                {enemy.tag}. {enemy.title}
            </Headline>

            <Tabs tabs={tabItems} />
        </>
    )
}

export default EnemyDetail
