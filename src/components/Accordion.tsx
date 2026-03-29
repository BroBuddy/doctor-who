import { useState } from 'react'

interface AccordionItem {
    id: string
    label: string
    children: React.ReactNode
}

interface AccordionProps {
    items: AccordionItem[]
}

export function Accordion({ items }: AccordionProps) {
    const [activeId, setActiveId] = useState<string | null>(null)

    const toggle = (id: string) => {
        setActiveId((prev) => (prev === id ? null : id))
    }

    return (
        <div className="flex flex-col">
            {items.map((item: AccordionItem) => {
                const isOpen = activeId === item.id

                return (
                    <div key={item.id} className={`${isOpen ? 'open' : ''}`}>
                        <div
                            className={`flex justify-between rounded pointer px-2 py-1 mb-1 ${
                                isOpen ? 'bg-purple' : 'bg-light-grey'
                            }`}
                            onClick={() => toggle(item.id)}
                            aria-expanded={isOpen}
                        >
                            <span
                                className={`text-bold ${
                                    isOpen ? 'text-white' : 'text-purple'
                                }`}
                            >
                                {item.label}
                            </span>
                            <span
                                className={
                                    isOpen ? 'text-white' : 'text-purple'
                                }
                            >
                                {isOpen ? '▲' : '▼'}
                            </span>
                        </div>

                        {isOpen && <div>{item.children}</div>}
                    </div>
                )
            })}
        </div>
    )
}
