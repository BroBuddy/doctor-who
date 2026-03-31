import Dice from '@/components/Dice'

function InvestigateTable() {
    return (
        <>
            <p>
                (Only if have Knowledge 2+ or had a Plot event) You decide to
                follow up on some clues. Roll 2D6 (+1 per Aware, +1 per Stealth,
                -1 if Wilderness and, if on Earth in World War Era or earlier,
                +1 per History) (max +3). Ifyou roll doubles, add +2 to Enemy
                Action roll this turn.
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
                            You run into trouble and encounter Enemies – Roll
                            for an Enemy encounter with -1 to encounter options
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>
                            You don’t learn anything but may find trouble – Roll
                            for an Incident
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>
                            Your clues turn out to be false and you discover
                            nothing
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>
                            You discover some clues – If you choose to
                            Investigate again next Turn, add +2 to the roll
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>
                            You discover that a Location could be important –
                            Roll for a random Location and then roll for a Plot
                            event if you Move there
                        </td>
                    </tr>
                    <tr>
                        <td>9–11</td>
                        <td>
                            Discover important information – Roll for a Plot
                            event. You may not Investigate next Turn at this
                            Location
                        </td>
                    </tr>
                    <tr>
                        <td>12+</td>
                        <td>
                            Discover vital information – Roll for a Plot event
                            and gain +1 Knowledge. If you previously had a Plot
                            event and have Knowledge 3+, you instead reveal the
                            Enemy. You may not Investigate further at this
                            Location
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default InvestigateTable
