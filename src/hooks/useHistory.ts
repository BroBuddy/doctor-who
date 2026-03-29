type HistoryItem = {
    tag: string
    title: string
}

export const useHistory = () => {
    const storage = 'doctor-who-game'

    const addToHistory = (tag: string, title: string) => {
        const history = JSON.parse(localStorage.getItem(storage) || '[]')
        const filtered = history.filter((item: HistoryItem) => item.tag !== tag)
        const updated = [{ tag, title }, ...filtered].slice(0, 10)
        localStorage.setItem(storage, JSON.stringify(updated))
    }

    const getHistory = () => {
        return JSON.parse(localStorage.getItem(storage) || '[]')
    }

    return { addToHistory, getHistory }
}
