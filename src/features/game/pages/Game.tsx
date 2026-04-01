import Welcome from '../components/Welcome'
import HowToPlay from '../components/HowToPlay'
import ThirdEdition from '../components/ThirdEdition'
import Card from '@/components/Card'

function Game() {
    return (
        <>
            <Card icon="👋" headline="Welcome">
                <Welcome />
            </Card>

            <Card icon="🎲" headline="How to Play">
                <HowToPlay />
            </Card>

            <Card icon="📝" headline="Third Edition Changes">
                <ThirdEdition />
            </Card>
        </>
    )
}

export default Game
