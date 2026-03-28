import { Headline } from '@/components/Headline'

function Welcome() {
    return (
        <>
            <Headline>Welcome</Headline>

            <p>
                This is storytelling game for one player. You read various
                numbered sections one at a time, but the sequence of sections is
                determined by rules and tables. Each describes a new situation,
                or provides rules about the choices and actions you can make.
                There are plenty of events and situations, so each game will be
                a new, fresh experience.
            </p>
            <p>
                DWSSG3e has four booklets –{' '}
                <strong>Rules, TARDIS Manual, Adventures and Enemy</strong>. You
                will also need two normal six-sided dice (D6) and tokens or
                counters to help you keep score of current totals in Adventures.
            </p>
            <p>
                The <strong>Adventures</strong> booklet details all the
                incredible locations that the TARDIS can visit (and has sections
                that begin with ‘A’). The
                <strong className="ml-1">Enemy</strong> booklet describes the
                various villains and aliens that oppose the Doctor (with
                sections that begin with ‘E’). The{' '}
                <strong>TARDIS Manual</strong> details how to fly the incredible
                ship between Adventures (with sections that begin with ‘t’, ‘V’,
                ‘Q’ and ‘T’). This <strong>Rules</strong> booklet (with sections
                that begin with ‘r’) describes how to play the game and includes
                all the reference tables.
            </p>
        </>
    )
}

export default Welcome
