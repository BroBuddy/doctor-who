function StudyTable() {
    return (
        <>
            <p>
                (If at a Museum or if noted at a Location, and before any Plot
                event). You decide to indulge in a period of study. Roll 2D6 (+1
                per History; if at a Museum you may instead choose +1 per
                Science; if at a Post Modern Era or later, you may instead add
                +1 per Computers) (max +3). If you roll doubles, you also gain 1
                VP.
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
                        <td>Have a really dull time – Lose 1 Luck</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Arrested by militia/guards – Captured (6)</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>
                            Companion Bored – If you have any Companions who are
                            not native or without History, they wander off and
                            are separated – roll for a random Location
                        </td>
                    </tr>
                    <tr>
                        <td>6–7</td>
                        <td>
                            Have an enjoyable time – No extra effect but if you
                            Study next Turn add +2 to roll
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>
                            Fascinating time – Gain 1 Luck or +1 to Charm or
                            Diplomacy rolls with native Characters here
                        </td>
                    </tr>
                    <tr>
                        <td>9–10</td>
                        <td>
                            Discovery – Roll for a Plot event or gain 1
                            Knowledge
                        </td>
                    </tr>
                    <tr>
                        <td>11+</td>
                        <td>
                            Incredible find – Gain 2 Knowledge or gain +2 to any
                            Research Actions in this Adventure
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default StudyTable
