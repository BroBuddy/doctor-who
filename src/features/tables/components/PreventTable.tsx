function PreventTable() {
    return (
        <>
            <p>
                (Only at a Lair or a Location indicated by Enemy Goal) You try
                to defeat the Enemy and prevent them reaching their Goal. Roll
                2D6 (+1 at a Lair, any Skill bonuses (max +3) from the Goal
                option chosen on the Enemy sheet) and +1 per subsequent attempt.
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
                            You are killed in your attempt to Defeat the Enemy –
                            you could possibly regenerate (r015)
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>
                            Your Companion has been killed. Randomly determine
                            which Companion and lose 2 Luck points.
                            <br />
                            If you have no Companion, you are killed instead
                            (but may regenerate – see r015)
                        </td>
                    </tr>
                    <tr>
                        <td>6–7</td>
                        <td>
                            You have failed to defeat the Enemy – choose to lose
                            1 Luck point or add +1 Danger
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>You have failed to defeat the Enemy</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>
                            You have failed to Defeat the Enemy but may make an
                            immediate Challenge Action roll if you wish (and do
                            not have any immediate Enemy encounter from the
                            Goal)
                        </td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>
                            An unknown factor has emerged – roll 1D6:
                            <br />
                            <strong>1–2: Self Sacrifice</strong> – You may kill
                            a Character with Bravery 3+ to Defeat the Enemy. You
                            do not lose VP if a Companion is killed in this way.
                            If you choose not to do this, you have failed to
                            Defeat the Enemy
                            <br />
                            <strong>3–4: Countdown</strong> – The Enemy is
                            Defeated but roll 1D6 for each Character not in the
                            TARDIS. On a result of 1–2 (1 if Character has
                            Running), they are killed in the blast
                            <br />
                            <strong>5–6: Revolt</strong> – If the Enemy has any
                            Minions then they rise against their masters and
                            Enemy is Defeated. If not, then you have failed to
                            Defeat the Enemy but gain +1 Luck point
                        </td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>
                            An opportunity arises for you to defeat the Enemy –
                            roll 1D6:
                            <br />
                            <strong>1–2: Rally Forces</strong> – If you have
                            total Brawn 15+, but roll 1D6 for each Character -
                            on a 1, Character is killed. If not, then you have
                            failed to Defeat the Enemy and add +1 Danger
                            <br />
                            <strong>3–4: Heroic Bravery</strong> – If a
                            Character makes a Bravery 10 roll (you may pay 1
                            Luck to add +2 to a Companion Bravery), but roll 1D6
                            and on a 1–2, the Character is killed (do not lose
                            VP if a Companion is killed)
                            <br />
                            <strong>5–6: Cunning Plan</strong> – If a Character
                            makes a Brains 12 roll. If you fail, also add +1
                            Danger and Character has an immediate Enemy
                            encounter
                        </td>
                    </tr>
                    <tr>
                        <td>12+</td>
                        <td>
                            You have successfully defeated the Enemy and
                            completed the Adventure
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default PreventTable
