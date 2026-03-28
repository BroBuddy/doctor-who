import { Headline } from '@/components/Headline'

function HowToPlay() {
    return (
        <>
            <Headline>How to Play</Headline>

            <p>
                DWSSG3e consists of a series of Adventures (see r006). An
                Adventure is reached by using the{' '}
                <strong className="mr-1">TARDIS Manual</strong>
                (see also r004). An Adventure is played out as a series of
                Turns. A standard Turn starts with you selecting an Action
                (r008), such as Exploring, Planning or Investigating. Depending
                on the Action selected, you are usually referred to a chart,
                where you roll 2D6. The result will describe what has happened
                and give further effects on the Adventure.
            </p>

            <p>
                After each Action, roll 2D6 on the Enemy Action Table (r009) to
                see if your Enemy has advanced their diabolical plan or if you
                have encountered them. If you do have an encounter, then you
                consult the <strong>Enemy</strong> Booklet.
            </p>

            <p>
                Some Adventures have keywords such as Dark or Exterior, which
                modify encounters. Most Locations in Adventures have Encounter
                lines which you roll on each Turn. Some Encounters may lead to
                Conflicts (r010) or you may meet Characters who join you as
                Allies. These additional Characters are useful in fights and
                have skills, knowledge or abilities that are useful in certain
                events and help you Defeat the Enemy. Some Characters can also
                become Companions (r002) who join you on your Adventures in the
                TARDIS. Of course, the Doctor always has some handy Gadgets
                (r005) to help in tight spots.
            </p>

            <p>
                In an Adventure, you need to Defeat an Enemy (r007). The Enemy
                is unknown at the start of the Adventure. By taking Actions and
                gaining <strong>Knowledge</strong> to find out what has been
                happening, you will reveal the Enemy. This is called the{' '}
                <strong>Discover Phase</strong>. Once you know the identity of
                the Enemy you must gain more <strong>Knowledge</strong> to
                reveal their Goal. This is called the{' '}
                <strong>Dilemma Phase</strong>. Once the Goal is known, in the{' '}
                <strong>Defeat Phase</strong> you then try to defeat the Enemy
                by choosing an option on the Goal and making various rolls and
                Actions, such as Prevent Actions.
            </p>

            <p>
                However, the Enemy is never idle and always getting closer to
                completing their plans. You will have to track the current
                <strong className="ml-1">Danger</strong> in the Adventure and
                you will lose an Adventure if the
                <strong className="ml-1">Danger</strong> total is ever 20 or
                more.
            </p>

            <p>
                Defeating an Enemy will gain you <strong>Victory Points</strong>{' '}
                (VP). You need
                <strong className="ml-1">30 VP</strong> to win the game. If the
                Enemy succeeds in their plan however, you must roll on the
                Setback table (r015) that can result in you losing{' '}
                <strong>VP</strong> (or worse). Once you finish an Adventure by
                successfully Defeating an Enemy or not, you return to the
                <strong className="ml-1">TARDIS Manual</strong> and journey
                onwards (r012).
            </p>

            <p>
                To start the game, a player should read through rule sections
                (r001-r012) and then select or create a Doctor (r002) to play.
                The player then starts at their matching TARDIS section in the
                <strong className="ml-1">TARDIS Manual</strong> (T00 if creating
                a new Doctor).
            </p>
        </>
    )
}

export default HowToPlay
