import { Accordion } from '@/components/Accordion'
import { Headline } from '@/components/Headline'
import AddFavorite from '@/features/favorite/components/AddFavorite'

function ActionTables() {
    const rule = {
        tag: 'R014',
        title: 'Action Tables',
    }

    const items = [
        {
            id: 'relax',
            label: 'Relax (Discover Phase)',
            children: (
                <>
                    <p>
                        <em>(Holiday Adventure only)</em> You decide to have a
                        little time off from saving the universe and try to
                        enjoy yourself at this destination. Roll 2D6 (+1 if a
                        native Companion is with you). If you roll doubles, draw
                        an Idea card
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
                                    Holiday Nightmare – Lose 1 Luck and you may
                                    not Relax again this Adventure
                                </td>
                            </tr>
                            <tr>
                                <td>3–4</td>
                                <td>
                                    You become bored – You may not Relax again
                                    this Adventure
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>
                                    Holiday interrupted – Roll for an Incident
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>
                                    Companion (with highest Bravery) is bored –
                                    If this Action is chosen again, he or she
                                    will become separated and must choose
                                    another Action. If you have no Companion –
                                    see 3–4
                                </td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>
                                    You enjoy yourself and relax – Gain 1 Luck.
                                    If you choose to Relax next Turn, add +2 to
                                    roll
                                </td>
                            </tr>
                            <tr>
                                <td>8–11</td>
                                <td>Have a great time – Gain 1D3 Luck</td>
                            </tr>
                            <tr>
                                <td>12+</td>
                                <td>
                                    Unexpected discovery – Roll for a Plot event
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            ),
        },
        {
            id: 'explore',
            label: 'Explore (Discover Phase)',
            children: (
                <>
                    <p>
                        You decide to explore the immediate area to see what you
                        can find. Roll 2D6 (+1 if with a native Character). If
                        you roll doubles, after resolving the result below, the
                        exploring Characters randomly separate into 2 groups.
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
                                    You encounter an Enemy – Enemy encounter
                                </td>
                            </tr>
                            <tr>
                                <td>3–5</td>
                                <td>
                                    You have an eventful time – Roll for an
                                    Incident
                                </td>
                            </tr>
                            <tr>
                                <td>6–7</td>
                                <td>
                                    You discover nothing unusual – No further
                                    effect. Add +2 to the roll if you Explore
                                    next Turn.
                                </td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>
                                    You meet someone – Roll for a Character
                                    event
                                </td>
                            </tr>
                            <tr>
                                <td>9–10</td>
                                <td>
                                    You discover clues – You may now Investigate
                                    in this Adventure (at a random allowable
                                    Location)
                                </td>
                            </tr>
                            <tr>
                                <td>11+</td>
                                <td>
                                    You discover something important – Roll for
                                    a Plot event
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            ),
        },
        {
            id: 'study',
            label: 'Study (Discover Phase)',
            children: (
                <>
                    <p>
                        (If at a Museum or if noted at a Location, and before
                        any Plot event). You decide to indulge in a period of
                        study. Roll 2D6 (+1 per History; if at a Museum you may
                        instead choose +1 per Science; if at a Post Modern Era
                        or later, you may instead add +1 per Computers) (max
                        +3). If you roll doubles, you also gain 1 VP.
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
                                <td>
                                    Arrested by militia/guards – Captured (6)
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>
                                    Companion Bored – If you have any Companions
                                    who are not native or without History, they
                                    wander off and are separated – roll for a
                                    random Location
                                </td>
                            </tr>
                            <tr>
                                <td>6–7</td>
                                <td>
                                    Have an enjoyable time – No extra effect but
                                    if you Study next Turn add +2 to roll
                                </td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>
                                    Fascinating time – Gain 1 Luck or +1 to
                                    Charm or Diplomacy rolls with native
                                    Characters here
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
                                    Incredible find – Gain 2 Knowledge or gain
                                    +2 to any Research Actions in this Adventure
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            ),
        },
        {
            id: 'investigate',
            label: 'Investigate (Discover Phase)',
            children: (
                <>
                    <p>
                        (Only if have Knowledge 2+ or had a Plot event) You
                        decide to follow up on some clues. Roll 2D6 (+1 per
                        Aware, +1 per Stealth, -1 if Wilderness and, if on Earth
                        in World War Era or earlier, +1 per History) (max +3).
                        Ifyou roll doubles, add +2 to Enemy Action roll this
                        turn.
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
                                    You run into trouble and encounter Enemies –
                                    Roll for an Enemy encounter with -1 to
                                    encounter options
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>
                                    You don’t learn anything but may find
                                    trouble – Roll for an Incident
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>
                                    Your clues turn out to be false and you
                                    discover nothing
                                </td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>
                                    You discover some clues – If you choose to
                                    Investigate again next Turn, add +2 to the
                                    roll
                                </td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>
                                    You discover that a Location could be
                                    important – Roll for a random Location and
                                    then roll for a Plot event if you Move there
                                </td>
                            </tr>
                            <tr>
                                <td>9–11</td>
                                <td>
                                    Discover important information – Roll for a
                                    Plot event. You may not Investigate next
                                    Turn at this Location
                                </td>
                            </tr>
                            <tr>
                                <td>12+</td>
                                <td>
                                    Discover vital information – Roll for a Plot
                                    event and gain +1 Knowledge. If you
                                    previously had a Plot event and have
                                    Knowledge 3+, you instead reveal the Enemy.
                                    You may not Investigate further at this
                                    Location
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            ),
        },
        {
            id: 'seek-information',
            label: 'Seek Information (Dilemma Phase)',
            children: (
                <>
                    <p>
                        You try to find out more about current events here.
                        Choose Diplomacy, Charm, Stealth, History (World War Era
                        or earlier) or Computers (Post Modern Era or later), but
                        you may only use Stealth if at a Wilderness Location or
                        Adventure. Roll 2D6 with +1 for each chosen Skill (max
                        +3). If you roll doubles, the Enemy Action result this
                        Turn is an automatic Enemy encounter.
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
                                    You run into some trouble and encounter
                                    Enemies – Roll for an Enemy encounter
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    You attract the attention of the Enemy –
                                    Roll for an Enemy event
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>
                                    You find nothing useful but roll for an
                                    Incident.
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
                                    You meet someone who might know something
                                    useful – Roll for a Character event.
                                </td>
                            </tr>
                            <tr>
                                <td>9–11</td>
                                <td>
                                    Discover important information – Gain 2
                                    Knowledge but you may not Seek Information
                                    next Turn at this Location using the same
                                    Skill.
                                </td>
                            </tr>
                            <tr>
                                <td>12+</td>
                                <td>
                                    Discover the Enemy plan – Roll for an Enemy
                                    Goal and either gain 1 Luck or reduce Danger
                                    by -1
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            ),
        },
        {
            id: 'find-help',
            label: 'Find Help (Dilemma/Defeat Phases)',
            children: (
                <>
                    <p>
                        (Not at a Wilderness or Lair; must be in Defeat Phase to
                        gain Reinforcements). You decide to get some help in
                        defeating the Enemy. Roll 2D6 with either +1 per
                        Diplomacy or +1 per Charm, -1 if at a Holiday, and, if
                        on Earth (Modern or Post Modern Eras), +1 for each
                        unique UNIT Character (total max +3). If you roll
                        doubles (in Dilemma Phase only), also roll for an
                        Incident after result.
                    </p>
                </>
            ),
        },
        {
            id: 'research',
            label: 'Research (Dilemma/Defeat Phases)',
            children: (
                <p>
                    You decide to do some research to find more information on
                    defeating the Enemy Choose: Engineer, Medicine, Science
                    (Victorian Era or later), Computers (Modern Era or later),
                    History (World War Era or earlier). You may not Research
                    Computers or History at a Wilderness Location or Adventure.
                    Roll 2D6 (add +1 per chosen Skill (max +3). If you roll
                    doubles (in Dilemma Phase only), also roll for an Incident
                    after result.
                </p>
            ),
        },
        {
            id: 'challenge',
            label: 'Challenge (Dilemma/Defeat Phases)',
            children: (
                <p>
                    Only possible if Enemy has an (Outwit) Conflict option, and
                    only by Characters with Bravery 3+). You decide to confront
                    the Enemy directly. Roll 2D6 (+1 if you have a Character
                    with Bravery 4+, +2 at a Lair, but -2 if you do not know the
                    Goal). If you roll doubles (in Dilemma Phase only), add +1
                    Danger.
                </p>
            ),
        },
        {
            id: 'plan',
            label: 'Plan (Defeat Phase)',
            children: (
                <p>
                    You decide to form a strategy against the Enemy to stop them
                    from completing their goal. Choose a Skill or Quality. Roll
                    2D6 with +1 per chosen Skill or per Character that has
                    chosen Quality at 3 or higher (max +3).
                </p>
            ),
        },
        {
            id: 'prevent',
            label: 'Prevent (Defeat Phase)',
            children: (
                <p>
                    (Only at a Lair or a Location indicated by Enemy Goal) You
                    try to defeat the Enemy and prevent them reaching their
                    Goal. Roll 2D6 (+1 at a Lair, any Skill bonuses (max +3)
                    from the Goal option chosen on the Enemy sheet) and +1 per
                    subsequent attempt.
                </p>
            ),
        },
    ]

    return (
        <>
            <Headline>
                <AddFavorite tag={rule.tag} title={rule.title} />
                {rule.tag}. {rule.title}
            </Headline>

            <Accordion items={items} />
        </>
    )
}

export default ActionTables
