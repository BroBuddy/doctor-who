import useGameStore from '@/features/game/store/useGameStore'

type Props = {
    tag: string
    title: string
}

function AddFavorite({ tag, title }: Props) {
    const addFavorite = useGameStore((state) => state.addFavorite)

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
