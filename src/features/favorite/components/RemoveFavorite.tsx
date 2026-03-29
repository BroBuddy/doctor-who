import useFavoriteStore from '../store/useFavoriteStore'

type Props = {
    tag: string
}

function RemoveFavorite({ tag }: Props) {
    const removeFavorite = useFavoriteStore((state) => state.removeFavorite)

    return (
        <span
            className="pointer bg-purple rounded p-1 mr-1"
            title="Remove Favorite"
            onClick={() => removeFavorite(tag)}
        >
            ❌
        </span>
    )
}

export default RemoveFavorite
