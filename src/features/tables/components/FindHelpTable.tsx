import Dice from '@/components/Dice'

function FindHelpTable() {
    return (
        <>
            <p>
                (Not at a Wilderness or Lair; must be in Defeat Phase to gain
                Reinforcements). You decide to get some help in defeating the
                Enemy. Roll 2D6 with either +1 per Diplomacy or +1 per Charm, -1
                if at a Holiday, and, if on Earth (Modern or Post Modern Eras),
                +1 for each unique UNIT Character (total max +3). If you roll
                doubles (in Dilemma Phase only), also roll for an Incident after
                result.
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
                            Authorities turn against you and you are arrested –
                            Captured (7)
                        </td>
                    </tr>
                    <tr>
                        <td>5–6</td>
                        <td>
                            Your request for help is denied – no further effect
                        </td>
                    </tr>
                    <tr>
                        <td>7–8</td>
                        <td>
                            Authorities need more convincing – if you choose to
                            Find Help next Turn add +2 to the roll OR roll for a
                            Character event
                        </td>
                    </tr>
                    <tr>
                        <td>9–10</td>
                        <td>
                            Roll for a Character event (or encounter a Friend
                            native to this Era), or choose from:
                            <br />
                            <strong>Reinforcements:</strong> Gain +1D3+1
                            Soldiers, Militia or Guards each Brains 0, Brawn 2,
                            Bravery 2 (UNIT if on Modern or Post Modern Earth)
                            <br />
                            <strong>Technical Support:</strong> Choose 1 of
                            Computers (Modern Era or later), Engineer (Victorian
                            Era or later) or Science (Victorian Era or later)
                        </td>
                    </tr>
                    <tr>
                        <td>11+</td>
                        <td>
                            Roll for a Character event (or encounter a Friend
                            native to this Era), or choose from:
                            <br />
                            <strong>Reinforcements:</strong> As above replacing
                            1D3 with 1D6. You may not choose Find Help again
                            here
                            <br />
                            <strong>Technical Support:</strong> As above but +2
                            to chosen Skill. You may not choose Find Help again
                            here
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default FindHelpTable
