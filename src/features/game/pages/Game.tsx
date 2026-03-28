import { Headline } from '@/components/Headline'
import Tabs, { type TabItem } from '@/components/Tabs'
import Welcome from '../components/Welcome'
import HowToPlay from '../components/HowToPlay'
import ThirdEdition from '../components/ThirdEdition'

function Game() {
    const tabItems: TabItem[] = [
        {
            label: 'Welcome',
            content: <Welcome />,
        },
        {
            label: 'How to Play',
            content: <HowToPlay />,
        },
        {
            label: 'Third Edition',
            content: <ThirdEdition />,
        },
    ]

    return (
        <>
            <Headline>Doctor Who: Solitaire Story Game</Headline>

            <Tabs tabs={tabItems} />
        </>
    )
}

export default Game
