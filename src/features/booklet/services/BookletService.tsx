import { bookletData } from '../data/bookletData'
import type { Booklet } from '../types/BookletType'

const getBookletData = (): Pick<Booklet, 'tag' | 'title'>[] => {
    return bookletData.map(({ tag, title }) => ({
        tag,
        title,
    }))
}

const getBookletByTag = (tag: string): Booklet => {
    return bookletData.find((item: Booklet) => item.tag === tag) as Booklet
}

export { getBookletData, getBookletByTag }
