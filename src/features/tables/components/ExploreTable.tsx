import Dice from '@/components/Dice'

function ExploreTable() {
    return (
        <>
            <p>
                You decide to explore the immediate area to see what you can
                find. Roll 2D6 (+1 if with a native Character). If you roll
                doubles, after resolving the result below, the exploring
                Characters randomly separate into 2 groups.
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
                        <td>You encounter an Enemy – Enemy encounter</td>
                    </tr>
                    <tr>
                        <td>3–5</td>
                        <td>
                            You have an eventful time – Roll for an Incident
                        </td>
                    </tr>
                    <tr>
                        <td>6–7</td>
                        <td>
                            You discover nothing unusual – No further effect.
                            Add +2 to the roll if you Explore next Turn.
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>You meet someone – Roll for a Character event</td>
                    </tr>
                    <tr>
                        <td>9–10</td>
                        <td>
                            You discover clues – You may now Investigate in this
                            Adventure (at a random allowable Location)
                        </td>
                    </tr>
                    <tr>
                        <td>11+</td>
                        <td>
                            You discover something important – Roll for a Plot
                            event
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ExploreTable
