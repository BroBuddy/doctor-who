import useFavoriteStore from '../store/useFavoriteStore'

type Props = {
    tag: string
    title: string
}

function AddFavorite({ tag, title }: Props) {
    const addFavorite = useFavoriteStore((state) => state.addFavorite)

    const handleAddFavorite = () => {
        addFavorite(tag, title)
    }

    return (
        <span
            className="pointer bg-purple rounded p-1 mr-1"
            title="Add to Favorites"
            onClick={handleAddFavorite}
        >
            ⭐
        </span>
    )
}

export default AddFavorite
