import { Link } from 'react-router-dom'

function HowToPlay() {
    return (
        <>
            <p>
                DWSSG3e consists of a series of Adventures (see r006). An
                Adventure is reached by using the{' '}
                <strong className="mr-1">TARDIS Manual</strong>
                (see also{' '}
                <Link to="/rule/R006" className="ruleTag">
                    R006
                </Link>
                ). An Adventure is played out as a series of Turns. A standard
                Turn starts with you selecting an Action (
                <Link to="/rule/R008" className="ruleTag">
                    R008
                </Link>
                ), such as Exploring, Planning or Investigating. Depending on
                the Action selected, you are usually referred to a chart, where
                you roll 2D6. The result will describe what has happened and
                give further effects on the Adventure.
            </p>

            <p>
                After each Action, roll 2D6 on the Enemy Action Table (
                <Link to="/rule/R009" className="ruleTag">
                    R009
                </Link>
                ) to see if your Enemy has advanced their diabolical plan or if
                you have encountered them. If you do have an encounter, then you
                consult the <strong>Enemy</strong> Booklet.
            </p>

            <p>
                Some Adventures have keywords such as Dark or Exterior, which
                modify encounters. Most Locations in Adventures have Encounter
                lines which you roll on each Turn. Some Encounters may lead to
                Conflicts (
                <Link to="/rule/R010" className="ruleTag">
                    R010
                </Link>
                ) or you may meet Characters who join you as Allies. These
                additional Characters are useful in fights and have skills,
                knowledge or abilities that are useful in certain events and
                help you Defeat the Enemy. Some Characters can also become
                Companions (
                <Link to="/rule/R002" className="ruleTag">
                    R002
                </Link>
                ) who join you on your Adventures in the TARDIS. Of course, the
                Doctor always has some handy Gadgets (
                <Link to="/rule/R005" className="ruleTag">
                    R005
                </Link>
                ) to help in tight spots.
            </p>

            <p>
                In an Adventure, you need to Defeat an Enemy (
                <Link to="/rule/R007" className="ruleTag">
                    R007
                </Link>
                ). The Enemy is unknown at the start of the Adventure. By taking
                Actions and gaining <strong>Knowledge</strong> to find out what
                has been happening, you will reveal the Enemy. This is called
                the <strong>Discover Phase</strong>. Once you know the identity
                of the Enemy you must gain more <strong>Knowledge</strong> to
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
                Setback table (
                <Link to="/rule/R015" className="ruleTag">
                    R015
                </Link>
                ) that can result in you losing <strong>VP</strong> (or worse).
                Once you finish an Adventure by successfully Defeating an Enemy
                or not, you return to the
                <strong className="ml-1">TARDIS Manual</strong> and journey
                onwards (
                <Link to="/rule/R012" className="ruleTag">
                    R012
                </Link>
                ).
            </p>

            <p>
                To start the game, a player should read through rule sections (
                <Link to="/rule/R001" className="ruleTag">
                    R001
                </Link>
                -
                <Link to="/rule/R012" className="ruleTag">
                    R012
                </Link>
                ) and then select or create a Doctor (
                <Link to="/rule/R002" className="ruleTag">
                    R002
                </Link>
                ) to play. The player then starts at their matching TARDIS
                section in the
                <strong className="ml-1">TARDIS Manual</strong> (
                <Link to="/tardis/T00" className="ruleTag">
                    T00
                </Link>{' '}
                if creating a new Doctor).
            </p>
        </>
    )
}

export default HowToPlay
