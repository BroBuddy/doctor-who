import { tardisData } from '../data/tardisData'
import type { Tardis } from '../types/TardisType'

const getTardisData = (): Pick<Tardis, 'tag' | 'title'>[] => {
    return tardisData.map(({ tag, title }) => ({
        tag,
        title,
    }))
}

const getTardisByTag = (tag: string): Tardis => {
    return tardisData.find((item: Tardis) => item.tag === tag) as Tardis
}

export { getTardisData, getTardisByTag }
