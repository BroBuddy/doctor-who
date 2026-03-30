import { Accordion } from '@/components/Accordion'
import Card from '@/components/Card'
import { Headline } from '@/components/Headline'

const sections = [
    {
        label: 'Eras',
        content: (
            <>
                <p>
                    The whole of Time and Space is big, so DWSSG3e uses 12
                    different Eras to define a rough chronology to Adventures.
                    As technology changes through time, the different Actions
                    you can perform (see r008) changes with the Era in which
                    your Adventure takes place – you can’t do any Research with
                    a computer in the Regency Era for example. Similarly, being
                    captured on Earth in the Medieval Era might be a lot rougher
                    than on Earth in the Post Modern Era. A complete list of the
                    different Eras and their dates is given in the TARDIS Manual
                    (TM01).
                </p>
            </>
        ),
    },
    {
        label: 'Danger and Knowledge',
        content: (
            <>
                <p>
                    Both are tracked on your TARDIS Mat throughout an Adventure.
                </p>
                <ul className="mb-3">
                    <li>
                        <strong>Danger</strong> represents how threatening the
                        situation is. It increases via events and conditions and
                        automatically by 1 at the end of each Turn. If Danger
                        ever reaches 20, the Enemy has completed their Goal —
                        you lose the Adventure and take a Setback (see R015).
                    </li>
                    <li>
                        <strong>Knowledge</strong> starts at 0 and is gained
                        from Plot events, Characters and other sources. Gaining
                        Knowledge first reveals the Enemy, then their Goal.
                    </li>
                </ul>
            </>
        ),
    },
    {
        label: 'Enemy',
        content: (
            <>
                <p>
                    Each Adventure has an Enemy line used when the Enemy is
                    revealed. You use the keyword to roll on the Enemy tables
                    (R018) to determine the exact Enemy.
                </p>
            </>
        ),
    },
    {
        label: 'Locations',
        content: (
            <>
                <p>
                    Each Adventure contains Locations you can visit, such as a
                    castle, a spaceship bridge or a London landmark. Locations
                    may have keywords like Exterior or Dark, a Move number as
                    the target for a Move Action, modifiers to Actions and often
                    an Encounter roll resolved after your Actions (R008).
                </p>
                <p>
                    The usual Landing Location is the first one listed. Some
                    Adventures require a 1D6 roll for a random Landing Location.
                </p>
            </>
        ),
    },
    {
        label: 'Groups of Characters',
        content: (
            <p>
                Characters may separate into two or more groups. When 2 groups
                are at the same Location they may regroup. You may only choose
                to separate when you have at least 1 TARDIS Character in each
                group. If forced to separate randomly, some groups may have no
                TARDIS Characters.
            </p>
        ),
    },
    {
        label: 'Adventure Phases',
        content: (
            <>
                <p>An Adventure is split into 3 distinct Phases.</p>
                <ul>
                    <li>
                        <strong>Discover Phase:</strong> Discover the identity
                        of the Enemy by having an Enemy encounter, a 'reveal
                        Enemy' result, or gaining enough Knowledge. When
                        revealed, roll 1D6 on the Enemy line to determine the
                        exact Enemy, add any Danger noted on the Enemy sheet and
                        reduce Knowledge to 0.
                    </li>
                    <li>
                        <strong>Dilemma Phase:</strong> Discover the Enemy plan
                        by gaining Knowledge equal to the Scheme value on the
                        Enemy sheet, or via a 'reveal Goal' result. When
                        revealed, roll 1D6 for the specific Goal and reduce
                        Knowledge to 0. Plot Events in this Phase grant +1
                        Knowledge instead.
                    </li>
                    <li>
                        <strong>Defeat Phase:</strong> Stop the Enemy reaching
                        their Goal. Each Goal details two possible ways to stop
                        the Enemy. Plot Events in this Phase grant +1 Knowledge,
                        which may help complete a Goal or discover an Enemy Lair
                        (see R007).
                    </li>
                </ul>
                <p>
                    If you complete the Goal requirements before Danger reaches
                    20, you Defeat the Enemy and win the Adventure. If not, you
                    have been Defeated — see Winning and Losing below.
                </p>
            </>
        ),
    },
    {
        label: 'Turn Sequence',
        content: (
            <>
                <p>
                    When the TARDIS lands at an Adventure, on your TARDIS Mat
                    set the initial Danger value as noted on the Adventure, your
                    Knowledge to ‘0’ and the Turn counter to ‘1’. Place a marker
                    on the ‘Discover Phase’ box. Your TARDIS Characters either
                    start at the landing Location for the TARDIS (as shown on
                    the Adventure above other Locations), or you roll for a
                    random Landing Location as instructed on the Adventure.
                </p>
                <p>
                    Each Turn you must choose an Action (r008) for your
                    Characters, such as Explore, Investigate or Challenge. If
                    your Characters are separated into different groups, each
                    group can choose the same or different Actions. Roll and
                    resolve each Action. Then roll for an Encounter at each
                    Location where you have Characters. After you have resolved
                    all of your Actions/Encounters, roll 2D6 on the Enemy Action
                    Table (r009) and apply result (if you have more than one
                    group of Characters, apply to a random group not including
                    groups Captured or in the TARDIS). Finally, add +1 to the
                    Danger total.
                </p>
                <p>Standard Turn Sequence Summary:</p>
                <ul className="mb-3">
                    <li>
                        Choose and resolve Player Action(s) for your TARDIS
                        Crew.
                    </li>
                    <li>Roll and resolve any Encounters at Locations.</li>
                    <li>Roll for Enemy Action.</li>
                    <li>Add +1 to current Danger.</li>
                </ul>
            </>
        ),
    },
    {
        label: 'Night in Adventures',
        content: (
            <>
                <p>
                    Lots of the Doctor’s adventures take place after dark, so to
                    give some sense of time passing in an Adventure and to give
                    more flavor, some Adventures feature Night rules. These may
                    alter encounters at Exterior Locations, give modifiers to
                    rolls (such as Enemy Action) or change rules. Some Enemies,
                    such as the Weeping Angels, get even more terrifying at
                    Night!
                </p>
                <p>
                    At Night, Exterior Locations will become Dark (so add +1 to
                    Stealth rolls). All Human Characters must spend 1 Turn of
                    Night resting and take no Action or be -1 to all Qualities
                    until the end of the Adventure. Night may also have other
                    effects if detailed on Adventure or Enemy Sheets. If an
                    Adventure features Night rules, it will explain when Night
                    falls, and for how many full Turns it will last. You may
                    wish to use tokens to note this on the Turn tracker on your
                    TARDIS Mat.
                </p>
            </>
        ),
    },
    {
        label: 'Winning and Losing Adventures',
        content: (
            <ul>
                <li>
                    <strong>If you win:</strong> Gain Victory Points given by
                    the Goal — Apocalypse Goals gain more VP than Capture Goals.
                    Some Adventures also have bonus VP. See Ending Adventures
                    (R012).
                </li>
                <li>
                    <strong>If you lose:</strong> Roll 2D6 on the Setback table
                    (R015), with modifiers based on the Goal type and the Danger
                    bonus of the Enemy.
                </li>
            </ul>
        ),
    },
]

function Adventures() {
    const items = sections.map((section, index) => ({
        id: String(index),
        label: section.label,
        children: section.content,
    }))

    return (
        <>
            <Headline>R006. Adventures</Headline>

            <Card>
                <p>
                    Adventures in the Adventure Booklet tell you where the
                    TARDIS has landed — Earth, a massive spaceship, a
                    far-distant planet, the Dalek home-planet of Skaro or other
                    amazing destinations throughout Time and Space.
                </p>
                <p>
                    Each Adventure has a TARDIS number, a date, an Era, optional
                    keywords such as Holiday or Wilderness, a Danger modifier
                    (normally 0–2), a Knowledge total (normally about 5) and a
                    Victory Point bonus for successful completion.
                </p>
                <p>
                    Each Adventure is represented by 2 sheets listing all
                    Locations you can visit, possible Enemies, Characters you
                    meet, Plots you discover and some special events, rules or
                    Characters.
                </p>

                <Accordion items={items} />
            </Card>
        </>
    )
}

export default Adventures
