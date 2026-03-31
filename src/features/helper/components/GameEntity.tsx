import RuleLink from '@/components/RuleLink'

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
            <RuleLink path={linkBase} tag={tag} />

            <span className="text-sm ml-1">{title}</span>
        </div>
    )
}

export default GameEntity
