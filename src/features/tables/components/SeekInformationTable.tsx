import Dice from '@/components/Dice'

function SeekInformationTable() {
    return (
        <>
            <p>
                You try to find out more about current events here. Choose
                Diplomacy, Charm, Stealth, History (World War Era or earlier) or
                Computers (Post Modern Era or later), but you may only use
                Stealth if at a Wilderness Location or Adventure. Roll 2D6 with
                +1 for each chosen Skill (max +3). If you roll doubles, the
                Enemy Action result this Turn is an automatic Enemy encounter.
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
                        <td>2–3</td>
                        <td>
                            You run into some trouble and encounter Enemies –
                            Roll for an Enemy encounter
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>
                            You attract the attention of the Enemy – Roll for an
                            Enemy event
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>
                            You find nothing useful but roll for an Incident.
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>You find nothing useful at all</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>
                            You discover nothing – if you choose to Seek
                            Information next Turn add +2 to the roll
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>
                            You meet someone who might know something useful –
                            Roll for a Character event.
                        </td>
                    </tr>
                    <tr>
                        <td>9–11</td>
                        <td>
                            Discover important information – Gain 2 Knowledge
                            but you may not Seek Information next Turn at this
                            Location using the same Skill.
                        </td>
                    </tr>
                    <tr>
                        <td>12+</td>
                        <td>
                            Discover the Enemy plan – Roll for an Enemy Goal and
                            either gain 1 Luck or reduce Danger by -1
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default SeekInformationTable
