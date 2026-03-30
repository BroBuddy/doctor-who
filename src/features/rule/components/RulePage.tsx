import { Accordion } from '@/components/Accordion'
import Card from '@/components/Card'
import { Headline } from '@/components/Headline'

type Section = {
    label: string
    content: React.ReactNode
}

type RulePageProps = {
    tag: string
    title: string
    sections: Section[]
    children?: React.ReactNode
}

function RulePage({ tag, title, sections, children }: RulePageProps) {
    const items = sections.map((section: Section, index: number) => ({
        id: String(index),
        label: section.label,
        children: section.content,
    }))

    return (
        <>
            <Headline>
                {tag}. {title}
            </Headline>

            <Card>
                {children}
                <Accordion items={items} />
            </Card>
        </>
    )
}

export default RulePage
