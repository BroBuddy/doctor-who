import { Link } from 'react-router-dom'

type GameEntityProps = {
    tag?: string
    title?: string
    linkBase: string
    emptyText: string
}

function GameEntity({ tag, title, linkBase, emptyText }: GameEntityProps) {
    if (!tag) {
        return (
            <p className="text-xs">
                <em>{emptyText}</em>
            </p>
        )
    }

    return (
        <div className="flex justify-start items-center">
            <Link
                to={`/${linkBase}/${tag}`}
                className="px-2 pt-1 pb-2 w-4 bg-light-blue rounded mr-2 mb-1 text-center"
            >
                <span className="text-sm">{tag}</span>
            </Link>

            <span className="text-sm">{title}</span>
        </div>
    )
}

export default GameEntity
