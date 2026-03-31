import Dice from '@/components/Dice'

function RelaxTable() {
    return (
        <>
            <p>
                <em>(Holiday Adventure only)</em> You decide to have a little
                time off from saving the universe and try to enjoy yourself at
                this destination. Roll 2D6 (+1 if a native Companion is with
                you). If you roll doubles, draw an Idea card
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
                        <td>2</td>
                        <td>
                            Holiday Nightmare – Lose 1 Luck and you may not
                            Relax again this Adventure
                        </td>
                    </tr>
                    <tr>
                        <td>3–4</td>
                        <td>
                            You become bored – You may not Relax again this
                            Adventure
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Holiday interrupted – Roll for an Incident</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>
                            Companion (with highest Bravery) is bored – If this
                            Action is chosen again, he or she will become
                            separated and must choose another Action. If you
                            have no Companion – see 3–4
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>
                            You enjoy yourself and relax – Gain 1 Luck. If you
                            choose to Relax next Turn, add +2 to roll
                        </td>
                    </tr>
                    <tr>
                        <td>8–11</td>
                        <td>Have a great time – Gain 1D3 Luck</td>
                    </tr>
                    <tr>
                        <td>12+</td>
                        <td>Unexpected discovery – Roll for a Plot event</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default RelaxTable
