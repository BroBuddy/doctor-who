import { enemyData } from '../data/enemyData'
import type { Enemy } from '../types/EnemyType'

const getEnemyData = (): Pick<
    Enemy,
    'id' | 'tag' | 'title' | 'description'
>[] => {
    return enemyData.map(({ id, tag, title, description }) => ({
        id,
        tag,
        title,
        description,
    }))
}

const getEnemyByTag = (tag: string): Enemy => {
    return enemyData.find((item: Enemy) => item.tag === tag) as Enemy
}

export { getEnemyData, getEnemyByTag }
