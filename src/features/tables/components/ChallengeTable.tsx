import Dice from '@/components/Dice'

function ChallengeTable() {
    return (
        <>
            <p>
                Only possible if Enemy has an (Outwit) Conflict option, and only
                by Characters with Bravery 3+). You decide to confront the Enemy
                directly. Roll 2D6 (+1 if you have a Character with Bravery 4+,
                +2 at a Lair, but -2 if you do not know the Goal). If you roll
                doubles (in Dilemma Phase only), add +1 Danger.
            </p>

            <p className="flex">
                <strong className="mr-1">Roll:</strong> 2D6 <Dice dice={2} />
            </p>

            <table className="text-sm">
                <thead>
                    <tr>
                        <td className="w-4">
                            <strong>Roll</strong>
                        </td>
                        <td>
                            <strong>Result</strong>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2–4</td>
                        <td>
                            Surrounded – See the Surrender option of Enemy or
                            start a Conflict if none
                        </td>
                    </tr>
                    <tr>
                        <td>5–6</td>
                        <td>
                            Failed Challenge – You may not try Challenge again
                            in this Adventure. Lose 1 Luck
                        </td>
                    </tr>
                    <tr>
                        <td>7–8</td>
                        <td>
                            Enemy Retaliates – Have an immediate Enemy encounter
                        </td>
                    </tr>
                    <tr>
                        <td>9–10</td>
                        <td>
                            Obtain Important Information – Reveal Enemy Goal OR
                            gain 2 Knowledge OR reduce Danger by -2.
                            <br />
                            Add +1 to Enemy Action roll this Turn
                        </td>
                    </tr>
                    <tr>
                        <td>11+</td>
                        <td>
                            Make bold statement – Add +2 to next Prevent Action
                            OR reduce Danger by -3 OR release any Captured
                            Characters.
                            <br />
                            Add +2 to Enemy Action roll this Turn
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ChallengeTable
