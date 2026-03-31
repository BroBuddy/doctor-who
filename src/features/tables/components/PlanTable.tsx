import Dice from '@/components/Dice'

function PlanTable() {
    return (
        <>
            <p>
                You decide to form a strategy against the Enemy to stop them
                from completing their goal. Choose a Skill or Quality. Roll 2D6
                with +1 per chosen Skill or per Character that has chosen
                Quality at 3 or higher (max +3).
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
                            Dead end – You may not Plan with this Skill/Quality
                            again this Adventure
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>
                            You have no success with your plan – roll for an
                            Incident
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>You have no success with your plan this turn.</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>
                            Progress – If you choose to Plan next Turn add +2 to
                            the roll
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>
                            Success – gain chosen Skill OR +1 Quality bonus
                            (both until end of Adventure)
                        </td>
                    </tr>
                    <tr>
                        <td>9–10</td>
                        <td>
                            Success – Gain chosen Skill OR +2 Quality bonus
                            (both until end of Adventure) OR draw an Idea card
                            (if able)
                        </td>
                    </tr>
                    <tr>
                        <td>11+</td>
                        <td>
                            Breakthrough – Gain chosen Skill (2) OR +3 Quality
                            bonus (both until end of Adventure) OR -2 Danger OR
                            draw Idea card (if able)
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default PlanTable
