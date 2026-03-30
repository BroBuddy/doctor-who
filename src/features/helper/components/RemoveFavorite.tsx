import useGameStore from '@/features/game/store/useGameStore'

type Props = {
    tag: string
}

function RemoveFavorite({ tag }: Props) {
    const removeFavorite = useGameStore((state) => state.removeFavorite)

    return (
        <span
            className="pointer p-1 mr-1"
            title="Remove Favorite"
            onClick={() => removeFavorite(tag)}
        >
            ❌
        </span>
    )
}

export default RemoveFavorite
