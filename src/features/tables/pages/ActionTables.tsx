import { Accordion } from '@/components/Accordion'
import Card from '@/components/Card'
import { Headline } from '@/components/Headline'
import AddFavorite from '@/features/helper/components/AddFavorite'
import ChallengeTable from '@/features/tables/components/ChallengeTable'
import ExploreTable from '@/features/tables/components/ExploreTable'
import FindHelpTable from '@/features/tables/components/FindHelpTable'
import InvestigateTable from '@/features/tables/components/InvestigateTable'
import PlanTable from '@/features/tables/components/PlanTable'
import PreventTable from '@/features/tables/components/PreventTable'
import RelaxTable from '@/features/tables/components/RelaxView'
import ResearchTable from '@/features/tables/components/ResearchTable'
import SeekInformationTable from '@/features/tables/components/SeekInformationTable'
import StudyTable from '@/features/tables/components/StudyTable'

function ActionTables() {
    const rule = {
        tag: 'R014',
        title: 'Action Tables',
    }

    const items = [
        {
            id: 'relax',
            label: 'Relax (Discover Phase)',
            children: <RelaxTable />,
        },
        {
            id: 'explore',
            label: 'Explore (Discover Phase)',
            children: <ExploreTable />,
        },
        {
            id: 'study',
            label: 'Study (Discover Phase)',
            children: <StudyTable />,
        },
        {
            id: 'investigate',
            label: 'Investigate (Discover Phase)',
            children: <InvestigateTable />,
        },
        {
            id: 'seek-information',
            label: 'Seek Information (Dilemma Phase)',
            children: <SeekInformationTable />,
        },
        {
            id: 'find-help',
            label: 'Find Help (Dilemma/Defeat Phases)',
            children: <FindHelpTable />,
        },
        {
            id: 'research',
            label: 'Research (Dilemma/Defeat Phases)',
            children: <ResearchTable />,
        },
        {
            id: 'challenge',
            label: 'Challenge (Dilemma/Defeat Phases)',
            children: <ChallengeTable />,
        },
        {
            id: 'plan',
            label: 'Plan (Defeat Phase)',
            children: <PlanTable />,
        },
        {
            id: 'prevent',
            label: 'Prevent (Defeat Phase)',
            children: <PreventTable />,
        },
    ]

    return (
        <>
            <Headline>
                <AddFavorite tag={rule.tag} title={rule.title} />
                {rule.tag}. {rule.title}
            </Headline>

            <Card>
                <div className="mt-4">
                    <Accordion items={items} />
                </div>
            </Card>
        </>
    )
}

export default ActionTables
