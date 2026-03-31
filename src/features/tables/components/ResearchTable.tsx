import Dice from '@/components/Dice'

function ResearchTable() {
    return (
        <>
            <p>
                You decide to do some research to find more information on
                defeating the Enemy Choose: Engineer, Medicine, Science
                (Victorian Era or later), Computers (Modern Era or later),
                History (World War Era or earlier). You may not Research
                Computers or History at a Wilderness Location or Adventure. Roll
                2D6 (add +1 per chosen Skill (max +3). If you roll doubles (in
                Dilemma Phase only), also roll for an Incident after result.
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
                        <td>Serendipity – Gain 1 Luck and 1 Knowledge</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>
                            Accident – Roll 1D6 for each Character with chosen
                            Skill – on a 1, they are killed
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Setback – Lose 1 Knowledge</td>
                    </tr>
                    <tr>
                        <td>5–6</td>
                        <td>Impasse – no result.</td>
                    </tr>
                    <tr>
                        <td>7–8</td>
                        <td>
                            Slow going – If you choose to Research next Turn add
                            +2 to the roll
                        </td>
                    </tr>
                    <tr>
                        <td>9–10</td>
                        <td>
                            Making progress – Gain 1 Knowledge or +1 to any
                            Prevent Action roll with chosen Skill
                        </td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>
                            Vital Discovery – Gain 2 Knowledge or +2 to a
                            Prevent Action roll with chosen Skill
                        </td>
                    </tr>
                    <tr>
                        <td>12+</td>
                        <td>
                            Breakthrough – Gain 3 Knowledge or +3 to a Prevent
                            Action roll with chosen Skill OR choose to Defeat
                            Enemy and lose 3 Luck points (or 1 VP) if you have
                            or gain the following:
                            <br />
                            <strong>History:</strong> Find secret knowledge to
                            destroy Enemy if Aware, History 3, Brains 12
                            <br />
                            <strong>Computers:</strong> Aim missile to destroy
                            Enemy Lair if Computers 3, Brains 15
                            <br />
                            <strong>Science:</strong> Create chemical weapon to
                            destroy Enemy if Science 3, Brains 15
                            <br />
                            <strong>Engineer:</strong> Construct device that
                            destroys Enemy if Engineer 3, Science, Brains 12
                            <br />
                            <strong>Medicine:</strong> Create virus that
                            destroys Enemy if Medicine 2, Science 2, Brains 12
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ResearchTable
