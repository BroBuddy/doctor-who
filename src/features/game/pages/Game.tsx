import { useState } from 'react'
import Welcome from '../components/Welcome'
import HowToPlay from '../components/HowToPlay'
import ThirdEdition from '../components/ThirdEdition'
import Card from '@/components/Card'
import './Game.scss'

function Game() {
    const [done, setDone] = useState<boolean>(false)

    return (
        <>
            {!done && (
                <div
                    className="tardis-fly-container"
                    onAnimationEnd={() => setDone(true)}
                >
                    <img
                        src="/images/tardis.png"
                        className="tardis-fly"
                        alt="TARDIS"
                    />
                </div>
            )}

            {done && (
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
            )}
        </>
    )
}

export default Game
